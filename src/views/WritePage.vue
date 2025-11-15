<template>
  <div class="write-page">
    <!-- 상단 헤더 -->
    <header class="write-header">
      <div class="header-left">
        <button class="back-btn" @click="goBack">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span>돌아가기</span>
        </button>
        <div class="title-area">
          <h1>{{ topicTitle }}</h1>
          <div class="input-row">
            <input
              v-model="articleTitle"
              type="text"
              placeholder="글 제목을 입력하세요"
              class="title-input"
            />
            <select v-model="selectedLanguage" class="language-select">
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
              <option value="vue">Vue</option>
              <option value="react">React</option>
            </select>
          </div>
          <input
            v-model="embedUrl"
            type="text"
            placeholder="임베드 URL (CodePen, CodeSandbox, Vercel 등)"
            class="embed-input"
          />
        </div>
      </div>
      <div class="header-right">
        <button class="save-btn" @click="saveArticle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
          </svg>
          <span>{{ isEditMode ? '수정 완료' : '저장하기' }}</span>
        </button>
      </div>
    </header>

    <!-- 2패널 레이아웃 -->
    <div class="panels-container">
      <!-- 왼쪽 패널: 원본 문서 뷰어 -->
      <div class="left-panel" :style="{ width: leftPanelWidth + '%' }">
        <div class="panel-header">
          <h3>참고 문서</h3>
          <div class="header-actions">
            <div class="language-badge">{{ selectedLanguage }}</div>
            <button class="edit-mode-btn" @click="toggleEditMode">
              {{ isDocEditMode ? '완료' : '편집' }}
            </button>
          </div>
        </div>

        <div class="document-viewer" ref="documentViewer">
          <!-- 편집 모드: textarea -->
          <textarea
            v-if="isDocEditMode"
            v-model="referenceDocument"
            class="document-editor"
            placeholder="코드나 문서를 입력하세요..."
          ></textarea>

          <!-- 뷰 모드: 라인 뷰어 -->
          <div v-else-if="referenceDocument" class="document-content">
            <div
              v-for="(line, index) in documentLines"
              :key="index"
              class="document-line"
              :class="{
                'selected': selectedLines.includes(index),
                'highlighted': highlightedLine === index
              }"
              @mousedown="startSelection(index)"
              @mouseup="endSelection(index)"
              @mouseenter="onLineHover(index)"
            >
              <span class="line-number">{{ index + 1 }}</span>
              <span class="line-content" v-html="highlightSyntax(line, selectedLanguage)"></span>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>편집 버튼을 눌러 문서를 입력하세요</p>
          </div>
        </div>

        <!-- 발췌 버튼 -->
        <div
          v-if="selectedLines.length > 0"
          class="extract-button"
          :style="{ top: extractButtonY + 'px' }"
          @click="extractSelection"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          발췌하기
        </div>
      </div>

      <!-- 크기 조절 핸들 -->
      <div
        class="resize-handle"
        @mousedown="startResize"
      ></div>

      <!-- 오른쪽 패널: 워크스페이스 -->
      <div class="right-panel">
        <div class="panel-header">
          <h3>워크스페이스</h3>
          <button class="add-card-btn" @click="addNewCard">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            메모 추가
          </button>
        </div>

        <div class="workspace" ref="workspace">
          <!-- 연결선 SVG -->
          <svg class="connection-lines" v-if="cards.length > 0">
            <line
              v-for="card in cards.filter(c => c.sourceLineStart !== null)"
              :key="'line-' + card.id"
              :x1="0"
              :y1="card.connectionY"
              :x2="50"
              :y2="card.y + 20"
              stroke="var(--color-accent)"
              stroke-width="2"
              stroke-dasharray="5,5"
              opacity="0.5"
            />
          </svg>

          <!-- 카드 목록 -->
          <div
            v-for="card in cards"
            :key="card.id"
            class="workspace-card"
            :class="{ 'is-dragging': draggingCard === card.id }"
            :style="{
              top: card.y + 'px',
              backgroundColor: card.color
            }"
            @mousedown="startDrag($event, card.id)"
            @click="focusOnSource(card)"
          >
            <div class="card-header">
              <div class="card-type">
                <span v-if="card.type === 'extract'">
                  📄 발췌 <span class="line-info">Line {{ card.sourceLineStart + 1 }}</span>
                </span>
                <span v-else>📝 메모</span>
              </div>
              <div class="card-actions">
                <button class="color-btn" @click.stop="changeCardColor(card.id)">
                  🎨
                </button>
                <button class="delete-btn" @click.stop="deleteCard(card.id)">
                  ×
                </button>
              </div>
            </div>
            <div class="card-content">
              <textarea
                v-model="card.content"
                placeholder="내용을 입력하세요..."
                @input="updateCard(card)"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 페이지 정보
const topicTitle = ref(route.query.topicTitle || '')
const articleTitle = ref('')
const selectedLanguage = ref('javascript')
const embedUrl = ref('')
const isEditMode = ref(false)
const editingArticleId = ref(null)

// 패널 크기
const leftPanelWidth = ref(50)
const isResizing = ref(false)

// 문서 관련
const referenceDocument = ref('')
const isDocEditMode = ref(true) // 초기에는 편집 모드
const documentLines = computed(() => {
  return referenceDocument.value ? referenceDocument.value.split('\n') : []
})

// 문서 편집 모드 토글
const toggleEditMode = () => {
  isDocEditMode.value = !isDocEditMode.value
  if (!isDocEditMode.value && selectedLines.value.length > 0) {
    selectedLines.value = []
    selectionStart.value = null
  }
}

// 선택 관련
const selectedLines = ref([])
const selectionStart = ref(null)
const extractButtonY = ref(0)
const highlightedLine = ref(null)

// 카드 관련
const cards = ref([])
let cardIdCounter = 0
const draggingCard = ref(null)
const dragStartY = ref(0)
const cardStartY = ref(0)

// 문서 뷰어 참조
const documentViewer = ref(null)
const workspace = ref(null)

// 돌아가기
const goBack = () => {
  if (confirm('작성 중인 내용이 사라집니다. 돌아가시겠습니까?')) {
    router.back()
  }
}

// 패널 크기 조절
const startResize = (e) => {
  isResizing.value = true
  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
}

const onResize = (e) => {
  if (!isResizing.value) return
  const containerWidth = e.currentTarget?.parentElement?.offsetWidth || window.innerWidth
  const newWidth = (e.clientX / containerWidth) * 100
  leftPanelWidth.value = Math.max(30, Math.min(70, newWidth))
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
}

// 라인 선택
const startSelection = (index) => {
  selectionStart.value = index
  selectedLines.value = [index]
}

const endSelection = (index) => {
  if (selectionStart.value === null) return

  const start = Math.min(selectionStart.value, index)
  const end = Math.max(selectionStart.value, index)
  selectedLines.value = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  // 발췌 버튼 위치 계산
  const firstLine = document.querySelector(`.document-line:nth-child(${start + 1})`)
  if (firstLine) {
    extractButtonY.value = firstLine.offsetTop
  }
}

const onLineHover = (index) => {
  if (selectionStart.value !== null && selectedLines.value.length > 0) {
    endSelection(index)
  }
}

// 발췌하기
const extractSelection = () => {
  if (selectedLines.value.length === 0) return

  const content = selectedLines.value
    .map(i => documentLines.value[i])
    .join('\n')

  const newCard = {
    id: cardIdCounter++,
    type: 'extract',
    content: content,
    y: cards.value.length * 200,
    color: '#ffffff',
    sourceLineStart: selectedLines.value[0],
    sourceLineEnd: selectedLines.value[selectedLines.value.length - 1],
    connectionY: extractButtonY.value + 10
  }

  cards.value.push(newCard)
  selectedLines.value = []
  selectionStart.value = null
}

// 메모 추가
const addNewCard = () => {
  const newCard = {
    id: cardIdCounter++,
    type: 'memo',
    content: '',
    y: cards.value.length * 200,
    color: '#fffacd',
    sourceLineStart: null,
    sourceLineEnd: null,
    connectionY: null
  }

  cards.value.push(newCard)
}

// 카드 드래그
const startDrag = (e, cardId) => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return

  draggingCard.value = cardId
  dragStartY.value = e.clientY
  const card = cards.value.find(c => c.id === cardId)
  cardStartY.value = card.y

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
  if (draggingCard.value === null) return

  const deltaY = e.clientY - dragStartY.value
  const card = cards.value.find(c => c.id === draggingCard.value)
  card.y = Math.max(0, cardStartY.value + deltaY)
}

const stopDrag = () => {
  draggingCard.value = null
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

// 카드 액션
const updateCard = (card) => {
  // 실시간 업데이트
}

const changeCardColor = (cardId) => {
  const colors = ['#ffffff', '#fffacd', '#ffe4e1', '#e0f7fa', '#f3e5f5', '#fff9c4']
  const card = cards.value.find(c => c.id === cardId)
  const currentIndex = colors.indexOf(card.color)
  card.color = colors[(currentIndex + 1) % colors.length]
}

const deleteCard = (cardId) => {
  cards.value = cards.value.filter(c => c.id !== cardId)
}

// 원본으로 포커스
const focusOnSource = (card) => {
  if (card.sourceLineStart === null) return

  highlightedLine.value = card.sourceLineStart
  const targetLine = document.querySelector(`.document-line:nth-child(${card.sourceLineStart + 1})`)
  if (targetLine && documentViewer.value) {
    documentViewer.value.scrollTo({
      top: targetLine.offsetTop - 100,
      behavior: 'smooth'
    })
  }

  setTimeout(() => {
    highlightedLine.value = null
  }, 2000)
}

// Syntax Highlighting
const highlightSyntax = (code, language = 'javascript') => {
  if (!code) return ''

  const lang = (language || 'javascript').toLowerCase()

  // 언어별 키워드 정의
  const keywordsByLanguage = {
    javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'new', 'this', 'try', 'catch', 'throw'],
    typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'new', 'this', 'try', 'catch', 'throw', 'interface', 'type', 'enum', 'public', 'private', 'protected'],
    python: ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'finally', 'with', 'as', 'lambda', 'yield'],
    java: ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'return', 'if', 'else', 'for', 'while', 'new', 'this', 'try', 'catch', 'finally', 'throw', 'throws'],
    vue: ['template', 'script', 'style', 'setup', 'export', 'default', 'import', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else'],
    react: ['import', 'export', 'default', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'useState', 'useEffect', 'useContext'],
    css: ['display', 'position', 'flex', 'grid', 'margin', 'padding', 'color', 'background', 'border', 'width', 'height'],
    html: []
  }

  const keywords = keywordsByLanguage[lang] || keywordsByLanguage.javascript
  let highlighted = code

  // 키워드 하이라이트
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g')
    highlighted = highlighted.replace(regex, `<span style="color: #0000ff; font-weight: 600;">${keyword}</span>`)
  })

  // 문자열 하이라이트
  highlighted = highlighted.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span style="color: #a31515;">$&</span>')

  // 주석 하이라이트
  if (lang === 'javascript' || lang === 'typescript' || lang === 'java' || lang === 'vue' || lang === 'react') {
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span style="color: #008000; font-style: italic;">$1</span>')
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color: #008000; font-style: italic;">$1</span>')
  } else if (lang === 'python') {
    highlighted = highlighted.replace(/(#.*$)/gm, '<span style="color: #008000; font-style: italic;">$1</span>')
  } else if (lang === 'css') {
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color: #008000; font-style: italic;">$1</span>')
  } else if (lang === 'html') {
    highlighted = highlighted.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color: #008000; font-style: italic;">$1</span>')
  }

  // 숫자 하이라이트
  highlighted = highlighted.replace(/\b(\d+)\b/g, '<span style="color: #098658;">$1</span>')

  return highlighted
}

// 저장하기
const saveArticle = () => {
  if (!articleTitle.value.trim()) {
    alert('글 제목을 입력해주세요.')
    return
  }

  const storageKey = `articles_${route.query.subcategory}_${route.query.page}`

  try {
    if (isEditMode.value && editingArticleId.value) {
      // 수정 모드
      const existingArticles = JSON.parse(localStorage.getItem(storageKey) || '[]')
      const index = existingArticles.findIndex(a => a.id === editingArticleId.value)

      if (index !== -1) {
        existingArticles[index] = {
          ...existingArticles[index],
          title: articleTitle.value,
          cards: cards.value,
          referenceDocument: referenceDocument.value,
          language: selectedLanguage.value,
          embedUrl: embedUrl.value,
          updatedAt: new Date().toISOString(),
          preview: cards.value[0]?.content.substring(0, 100) || '내용 없음'
        }
        localStorage.setItem(storageKey, JSON.stringify(existingArticles))
        alert('수정되었습니다!')
      }
    } else {
      // 새 글 작성
      const article = {
        id: Date.now().toString(),
        title: articleTitle.value,
        topicId: route.query.topic,
        topicTitle: topicTitle.value,
        category: route.query.category,
        subcategory: route.query.subcategory,
        page: route.query.page,
        cards: cards.value,
        referenceDocument: referenceDocument.value,
        language: selectedLanguage.value,
        embedUrl: embedUrl.value,
        createdAt: new Date().toISOString(),
        preview: cards.value[0]?.content.substring(0, 100) || '내용 없음'
      }

      const existingArticles = JSON.parse(localStorage.getItem(storageKey) || '[]')
      existingArticles.push(article)
      localStorage.setItem(storageKey, JSON.stringify(existingArticles))
      alert('저장되었습니다!')
    }

    router.back()
  } catch (error) {
    console.error('Failed to save article:', error)
    alert('저장에 실패했습니다. 용량이 부족할 수 있습니다.')
  }
}

// 예시 문서 로드 및 수정 모드 처리
onMounted(() => {
  const editId = route.query.editId

  if (editId) {
    // 수정 모드
    isEditMode.value = true
    editingArticleId.value = editId

    // localStorage에서 기존 글 찾기
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('articles_')) {
        try {
          const articles = JSON.parse(localStorage.getItem(key) || '[]')
          const article = articles.find(a => a.id === editId)

          if (article) {
            articleTitle.value = article.title
            referenceDocument.value = article.referenceDocument || ''
            selectedLanguage.value = article.language || 'javascript'
            embedUrl.value = article.embedUrl || ''
            cards.value = article.cards || []

            // 카드 ID 카운터 업데이트
            if (cards.value.length > 0) {
              cardIdCounter = Math.max(...cards.value.map(c => c.id)) + 1
            }
            break
          }
        } catch (error) {
          console.error('Failed to load article:', error)
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.write-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
}

.write-header {
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-accent);
    color: var(--color-text-primary);
  }
}

.title-area {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  h1 {
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
    margin: 0;
    font-weight: 500;
  }
}

.input-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 700px;
}

.title-input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: 600;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
}

.language-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.875rem;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
}

.embed-input {
  width: 100%;
  max-width: 700px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.875rem;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
}

.save-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--color-link-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 96, 223, 0.3);
  }
}

.panels-container {
  display: flex;
  flex: 1;
  height: calc(100vh - 80px);
  position: relative;
}

.left-panel {
  background: var(--color-bg-primary);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.language-badge {
  padding: 0.25rem 0.75rem;
  background: var(--color-bg-tertiary);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
}

.edit-mode-btn {
  padding: 0.375rem 0.875rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--color-link-hover);
  }
}

.add-doc-btn,
.add-card-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
  }
}

.document-viewer {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  position: relative;
}

.document-editor {
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  resize: none;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);

  &:focus {
    outline: none;
  }
}

.document-content {
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.document-line {
  display: flex;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: var(--color-bg-tertiary);
  }

  &.selected {
    background: rgba(0, 96, 223, 0.1);
  }

  &.highlighted {
    background: rgba(255, 235, 59, 0.3);
    animation: highlight-pulse 1s ease;
  }
}

@keyframes highlight-pulse {
  0%, 100% { background: rgba(255, 235, 59, 0.3); }
  50% { background: rgba(255, 235, 59, 0.6); }
}

.line-number {
  display: inline-block;
  width: 40px;
  color: var(--color-text-tertiary);
  user-select: none;
  text-align: right;
  margin-right: 1rem;
}

.line-content {
  flex: 1;
  color: var(--color-text-primary);
}

.extract-button {
  position: absolute;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 96, 223, 0.3);
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    background: var(--color-link-hover);
    transform: scale(1.05);
  }
}

.resize-handle {
  width: 6px;
  background: var(--color-border);
  cursor: col-resize;
  transition: background 0.2s;

  &:hover {
    background: var(--color-accent);
  }
}

.right-panel {
  flex: 1;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.workspace {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.workspace-card {
  position: absolute;
  left: 2rem;
  right: 2rem;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: move;
  transition: box-shadow 0.2s;
  z-index: 1;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  &.is-dragging {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    cursor: grabbing;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.card-type {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-tertiary);

  .line-info {
    color: var(--color-accent);
    font-family: monospace;
  }
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.color-btn,
.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}

.delete-btn {
  font-size: 1.5rem;
  color: #ef4444;
}

.card-content {
  textarea {
    width: 100%;
    min-height: 120px;
    padding: 0.75rem;
    border: 1px solid var(--color-border-light);
    border-radius: 6px;
    font-size: 0.9375rem;
    line-height: 1.6;
    resize: vertical;
    font-family: inherit;
    background: transparent;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
}

.card-source {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  font-family: monospace;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-tertiary);
  font-size: 0.9375rem;
}
</style>
