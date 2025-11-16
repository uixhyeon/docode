<template>
  <div class="project-detail-page">
    <!-- 로딩 상태 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>프로젝트 로딩 중...</p>
    </div>

    <!-- 프로젝트가 없을 때 -->
    <div v-else-if="!project" class="not-found">
      <h1>프로젝트를 찾을 수 없습니다</h1>
      <router-link to="/production-sites" class="back-link">목록으로 돌아가기</router-link>
    </div>

    <!-- 프로젝트 상세 -->
    <div v-else class="project-content">
      <!-- 고정 네비게이션 -->
      <nav class="sticky-nav" :class="{ hidden: !showNav }">
        <div class="nav-content">
          <button
            v-for="section in project.sections"
            :key="section.id"
            @click="scrollToSection(section.id)"
            :class="{ active: activeSection === section.id }"
            class="nav-item"
          >
            {{ section.title }}
          </button>
          <button class="edit-mode-btn" @click="toggleEditMode">
            {{ isEditMode ? '미리보기' : '편집 모드' }}
          </button>
        </div>
      </nav>

      <!-- 페이지 콘텐츠 -->
      <div class="page-content">
        <!-- 프로젝트 헤더 -->
        <div class="project-header">
          <h1 class="main-title">
            <span class="project-icon">{{ project.icon }}</span>
            {{ project.name }}
          </h1>
          <p class="subtitle">{{ project.description }}</p>
        </div>

        <!-- 섹션 목록 -->
        <div v-for="(section, index) in project.sections" :key="section.id">
          <section :id="section.id" class="content-section">
            <!-- 섹션 헤더 -->
            <div class="section-header">
              <h2 v-if="!isEditMode">{{ section.title }}</h2>
              <input
                v-else
                v-model="section.title"
                type="text"
                class="title-input"
                placeholder="섹션 제목"
              />
              <button v-if="isEditMode" class="delete-section-btn" @click="deleteSection(index)">
                삭제
              </button>
            </div>

            <!-- 섹션 내용 -->
            <div v-if="!isEditMode" class="section-content" v-html="renderMarkdown(section.content)"></div>
            <textarea
              v-else
              v-model="section.content"
              class="content-textarea"
              placeholder="마크다운 형식으로 내용을 입력하세요..."
              rows="15"
            ></textarea>
          </section>
        </div>

        <!-- 새 섹션 추가 버튼 (편집 모드) -->
        <button v-if="isEditMode" class="add-section-btn" @click="addSection">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          <span>새 섹션 추가</span>
        </button>

        <!-- 저장 버튼 (편집 모드) -->
        <div v-if="isEditMode" class="edit-actions">
          <button class="btn-cancel" @click="cancelEdit">취소</button>
          <button class="btn-save" @click="saveProject">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { auth } from '../../firebase/config'
import { getProductionSite, updateProductionSite } from '../../firebase/firestore'
import { useToast } from '../../composables/useToast'

const route = useRoute()
const { success, error } = useToast()

const project = ref(null)
const loading = ref(true)
const isEditMode = ref(false)
const originalProject = ref(null)

const showNav = ref(true)
const activeSection = ref('')
let lastScrollY = 0
let ticking = false

// 프로젝트 로드
const loadProject = async () => {
  try {
    const user = auth.currentUser
    if (!user) {
      error('로그인이 필요합니다.')
      return
    }

    const siteId = route.params.id
    const site = await getProductionSite(user.uid, siteId)

    if (site) {
      project.value = site
      // 섹션이 없으면 기본 섹션 생성
      if (!project.value.sections || project.value.sections.length === 0) {
        project.value.sections = [
          {
            id: 'overview',
            title: '프로젝트 개요',
            content: '# 프로젝트 개요\n\n프로젝트에 대한 설명을 입력하세요.'
          }
        ]
      }
      originalProject.value = JSON.parse(JSON.stringify(site))
    }
  } catch (err) {
    console.error('Load error:', err)
    error('프로젝트를 불러오는데 실패했습니다.')
  } finally {
    loading.value = false
  }
}

// 마크다운 렌더링 (간단한 구현)
const renderMarkdown = (markdown) => {
  if (!markdown) return ''

  let html = markdown
    // 헤더
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // 볼드
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 이탤릭
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 코드 블록
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<div class="code-block"><pre><code>${escapeHtml(code.trim())}</code></pre></div>`
    })
    // 인라인 코드
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 링크
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    // 리스트
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // 줄바꿈
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')

  return `<div class="markdown-content"><p>${html}</p></div>`
}

const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

// 편집 모드 토글
const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value
  if (isEditMode.value) {
    originalProject.value = JSON.parse(JSON.stringify(project.value))
  }
}

// 섹션 추가
const addSection = () => {
  const newSection = {
    id: `section-${Date.now()}`,
    title: '새 섹션',
    content: '내용을 입력하세요...'
  }
  project.value.sections.push(newSection)
}

// 섹션 삭제
const deleteSection = (index) => {
  if (confirm('이 섹션을 삭제하시겠습니까?')) {
    project.value.sections.splice(index, 1)
  }
}

// 프로젝트 저장
const saveProject = async () => {
  try {
    const user = auth.currentUser
    if (!user) {
      error('로그인이 필요합니다.')
      return
    }

    await updateProductionSite(user.uid, project.value.id, {
      sections: project.value.sections
    })

    success('프로젝트가 저장되었습니다.')
    isEditMode.value = false
    originalProject.value = JSON.parse(JSON.stringify(project.value))
  } catch (err) {
    console.error('Save error:', err)
    error('저장 중 오류가 발생했습니다.')
  }
}

// 편집 취소
const cancelEdit = () => {
  project.value = JSON.parse(JSON.stringify(originalProject.value))
  isEditMode.value = false
}

// 스크롤 이벤트 처리
const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    showNav.value = false
  } else {
    showNav.value = true
  }

  lastScrollY = currentScrollY
  updateActiveSection()
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

const updateActiveSection = () => {
  if (!project.value?.sections) return

  const scrollPosition = window.scrollY + 150

  for (const section of project.value.sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 100
    const elementPosition = element.offsetTop - offset

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  loadProject()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.project-detail-page {
  min-height: 100vh;
  background: #f9fafb;
  padding-top: 80px;
}

// 로딩
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #e5e7eb;
    border-top-color: #087ea4;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  p {
    margin-top: 1rem;
    color: #6b7280;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// Not found
.not-found {
  text-align: center;
  padding: 4rem 2rem;

  h1 {
    font-size: 2rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  .back-link {
    color: #087ea4;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}

// 고정 네비게이션
.sticky-nav {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 100;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &.hidden {
    transform: translateY(-100%);
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.nav-item {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: #6b7280;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: #1f2937;
  }

  &.active {
    color: #087ea4;
    border-bottom-color: #087ea4;
  }
}

.edit-mode-btn {
  padding: 0.5rem 1rem;
  margin-left: auto;
  background: #087ea4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background: #0c5f7a;
  }
}

// 페이지 콘텐츠
.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.project-header {
  margin-bottom: 3rem;
  text-align: center;
}

.main-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 0.5rem;

  .project-icon {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;

    .project-icon {
      font-size: 2rem;
    }
  }
}

.subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.content-section {
  margin-bottom: 4rem;
  scroll-margin-top: 150px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
    flex: 1;
  }

  .title-input {
    flex: 1;
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 0.5rem;
    background: white;

    &:focus {
      outline: none;
      border-color: #087ea4;
      box-shadow: 0 0 0 3px rgba(8, 126, 164, 0.1);
    }
  }

  .delete-section-btn {
    padding: 0.5rem 1rem;
    background: #fee;
    color: #d73a49;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #fdd;
    }
  }
}

// 마크다운 콘텐츠 스타일
:deep(.markdown-content) {
  line-height: 1.8;
  color: #374151;

  h1, h2, h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #1f2937;
  }

  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }

  p {
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 600;
    color: #1f2937;
  }

  code {
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    color: #d73a49;
  }

  .code-block {
    background: #0d1117;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    overflow-x: auto;

    pre {
      margin: 0;

      code {
        font-family: 'Courier New', Consolas, monospace;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #c9d1d9;
        background: none;
        padding: 0;
        white-space: pre;
      }
    }
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #087ea4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.content-textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.9375rem;
  line-height: 1.8;
  background: white;
  color: #1f2937;
  resize: vertical;
  min-height: 300px;

  &:focus {
    outline: none;
    border-color: #087ea4;
    box-shadow: 0 0 0 3px rgba(8, 126, 164, 0.1);
  }
}

.add-section-btn {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  color: #9ca3af;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  &:hover {
    background: #f9fafb;
    border-color: #087ea4;
    color: #087ea4;
  }
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.btn-cancel,
.btn-save {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #f3f4f6;
  color: #6b7280;

  &:hover {
    background: #e5e7eb;
  }
}

.btn-save {
  background: #087ea4;
  color: white;

  &:hover {
    background: #0c5f7a;
    box-shadow: 0 4px 8px rgba(8, 126, 164, 0.3);
  }
}

// 반응형
@media (max-width: 768px) {
  .project-detail-page {
    padding-top: 60px;
  }

  .sticky-nav {
    top: 50px;
  }

  .nav-item {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }

  .page-content {
    padding: 1rem;
  }
}
</style>
