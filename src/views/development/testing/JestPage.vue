<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>✅ Jest</h1>
        <p class="page-description">Jest를 활용한 단위 테스트를 배웁니다.</p>
      </header>

      <section class="content-section">
        <h2>주요 내용</h2>
        <div class="content-list">
          <div v-for="topic in topics" :key="topic.id" class="topic-wrapper">
            <div class="content-item">
              <div class="item-header">
                <div class="item-title-area">
                  <h3>{{ topic.title }}</h3>
                  <p>{{ topic.description }}</p>
                </div>
                <div class="button-group">

                  <button class="write-btn" @click="goToWrite(topic.id, topic.title)">

                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">

                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>

                    </svg>

                    <span>글쓰기</span>

                  </button>

                  <button class="edit-title-btn" @click="startEditTopic(topic)">

                    제목 수정

                  </button>

                </div>
              </div>
            </div>

            <!-- 작성된 글 목록 -->
            <div v-if="getArticles(topic.id).length > 0" class="articles-list">
              <div
                v-for="article in getArticles(topic.id)"
                :key="article.id"
                class="article-card"
                @click="viewArticle(article.id)"
              >
                <div class="article-header">
                  <h4>{{ article.title }}</h4>
                  <span class="article-date">{{ formatDate(article.createdAt) }}</span>
                </div>
                <p class="article-preview">{{ article.preview }}</p>
              </div>
            </div>

          <!-- 새 컨텐츠 추가 버튼 -->
          <button class="add-content-btn" @click="addNewTopic">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>새 컨텐츠 추가</span>
          </button>
          </div>
        </div>
      </section>
    </div>

    <!-- 제목 수정 모달 -->
    <div v-if="editingTopic" class="modal-overlay" @click="cancelEdit">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>컨텐츠 수정</h3>
          <button class="close-btn" @click="cancelEdit">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>제목</label>
            <input
              v-model="editForm.title"
              type="text"
              placeholder="제목을 입력하세요"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label>설명</label>
            <textarea
              v-model="editForm.description"
              placeholder="설명을 입력하세요"
              class="form-textarea"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" @click="cancelEdit">취소</button>
          <button class="btn-delete" @click="deleteTopic" v-if="!editingTopic.isNew">삭제</button>
          <button class="btn-save" @click="saveTopic">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TabNavigation from '../../../components/TabNavigation.vue'
import { useArticles } from '../../../composables/useArticles'

const router = useRouter()

const tabs = [
  { name: 'Jest', path: '/development/testing/jest', icon: '✅' },
  { name: 'Library', path: '/development/testing/library', icon: '🧪' },
  { name: 'E2E', path: '/development/testing/e2e', icon: '🎭' },
  { name: 'Visual', path: '/development/testing/visual', icon: '👁️' },
]

const topics = ref([
  {
    id: 'test-basics',
    title: 'Test Basics',
    description: '테스트 작성 기초'
  },
  {
    id: 'matchers',
    title: 'Matchers',
    description: '매처 함수'
  },
  {
    id: 'mocking',
    title: 'Mocking',
    description: '모의 객체 생성'
  },
  {
    id: 'snapshots',
    title: 'Snapshots',
    description: '스냅샷 테스트'
  },
  {
    id: 'async-testing',
    title: 'Async Testing',
    description: '비동기 테스트'
  },
  {
    id: 'coverage',
    title: 'Coverage',
    description: '테스트 커버리지'
  }
])

const { articles, getArticles } = useArticles('testing', 'jest')

// 글쓰기 페이지로 이동
const goToWrite = (topicId, topicTitle) => {
  router.push({
    path: '/write',
    query: {
      category: 'development',
      subcategory: 'testing',
      page: 'jest',
      topic: topicId,
      topicTitle: topicTitle
    }
  })
}

// 글 상세 보기
const viewArticle = (articleId) => {
  router.push({
    path: '/article',
    query: {
      id: articleId
    }
  })
}

// 날짜 포맷
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}


// 토픽 편집 관련
const editingTopic = ref(null)
const editForm = ref({
  title: '',
  description: ''
})

// 새 컨텐츠 추가
const addNewTopic = () => {
  const newTopic = {
    id: 'topic-' + Date.now(),
    title: '',
    description: '',
    isNew: true
  }
  editingTopic.value = newTopic
  editForm.value = {
    title: '',
    description: ''
  }
}

// 토픽 수정 시작
const startEditTopic = (topic) => {
  editingTopic.value = { ...topic }
  editForm.value = {
    title: topic.title,
    description: topic.description
  }
}

// 토픽 저장
const saveTopic = () => {
  if (!editForm.value.title.trim()) {
    alert('제목을 입력해주세요.')
    return
  }

  if (editingTopic.value.isNew) {
    // 새 토픽 추가
    topics.value.push({
      id: editingTopic.value.id,
      title: editForm.value.title,
      description: editForm.value.description
    })
  } else {
    // 기존 토픽 수정
    const index = topics.value.findIndex(t => t.id === editingTopic.value.id)
    if (index !== -1) {
      topics.value[index].title = editForm.value.title
      topics.value[index].description = editForm.value.description
    }
  }

  cancelEdit()
}

// 토픽 삭제
const deleteTopic = () => {
  if (!confirm('이 컨텐츠를 삭제하시겠습니까?')) return

  const index = topics.value.findIndex(t => t.id === editingTopic.value.id)
  if (index !== -1) {
    topics.value.splice(index, 1)
  }

  cancelEdit()
}

// 편집 취소
const cancelEdit = () => {
  editingTopic.value = null
  editForm.value = {
    title: '',
    description: ''
  }
}
</script>

<style lang="scss" scoped>
.subcategory-page {
  min-height: 100%;
}

.page-content {
  max-width: 100%;
}

.page-header {
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .page-description {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
}

.content-section {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--color-border-light);
  }
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.topic-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-item {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.item-title-area {
  flex: 1;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }
}


.button-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  flex-shrink: 0;
}

.write-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--color-link-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 96, 223, 0.3);
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
}

.edit-title-btn {
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  font-size: 0.8125rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-text-secondary);
    text-decoration: underline;
  }
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 1rem;
}

.article-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    background: var(--color-bg-primary);
    transform: translateX(4px);
  }
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }
}

.article-date {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.article-preview {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.add-content-btn {
  width: 100%;
  padding: 1.5rem;
  background: var(--color-bg-secondary);
  border: 2px dashed var(--color-border);
  border-radius: 8px;
  color: var(--color-text-tertiary);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: var(--color-bg-primary);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  svg {
    flex-shrink: 0;
  }
}

// 모달 스타일
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--color-bg-primary);
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-secondary);
  }
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.9375rem;
  font-family: inherit;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 96, 223, 0.1);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.6;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel,
.btn-delete,
.btn-save {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);

  &:hover {
    background: var(--color-border);
  }
}

.btn-delete {
  background: #fee;
  color: #d73a49;
  margin-right: auto;

  &:hover {
    background: #fdd;
  }
}

.btn-save {
  background: var(--color-accent);
  color: white;

  &:hover {
    background: var(--color-link-hover);
    box-shadow: 0 4px 8px rgba(0, 96, 223, 0.3);
  }
}

</style>
