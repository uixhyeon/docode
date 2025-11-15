<template>
  <div class="article-page">
    <!-- 상단 헤더 -->
    <header class="article-header">
      <button class="back-btn" @click="goBack">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span>목록으로</span>
      </button>

      <div class="article-meta">
        <h1>{{ article?.title || '제목 없음' }}</h1>
        <div class="meta-info">
          <span class="topic-badge">{{ topicTitle }}</span>
          <span class="date">{{ formatDate(article?.createdAt) }}</span>
        </div>
      </div>
    </header>

    <!-- 2패널 레이아웃 -->
    <div class="panels-container">
      <!-- 왼쪽 패널: 원본 문서 뷰어 -->
      <div class="left-panel">
        <div class="panel-header">
          <h3>📄 참고 문서</h3>
          <div v-if="article?.language" class="language-badge">
            {{ article.language }}
          </div>
        </div>

        <div class="document-viewer" ref="documentViewer">
          <div v-if="article?.referenceDocument" class="document-content">
            <div
              v-for="(line, index) in documentLines"
              :key="index"
              class="document-line"
              :class="{ 'highlighted': highlightedLine === index }"
              :id="'line-' + index"
            >
              <span class="line-number">{{ index + 1 }}</span>
              <span class="line-content" v-html="highlightSyntax(line, article.language)"></span>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>참고 문서가 없습니다.</p>
          </div>
        </div>
      </div>

      <!-- 오른쪽 패널: 워크스페이스 -->
      <div class="right-panel">
        <div class="panel-header">
          <h3>📝 발췌 내용</h3>
        </div>

        <div class="workspace" ref="workspace">
          <!-- 연결선 SVG -->
          <svg class="connection-lines" v-if="sortedCards.length > 0">
            <line
              v-for="(card, idx) in sortedCards.filter(c => c.sourceLineStart !== undefined)"
              :key="'line-' + card.id"
              :x1="0"
              :y1="getLineY(card.sourceLineStart)"
              :x2="50"
              :y2="idx * 200 + 20"
              stroke="var(--color-accent)"
              stroke-width="2"
              stroke-dasharray="5,5"
              opacity="0.5"
            />
          </svg>

          <!-- 카드 목록 -->
          <div
            v-for="(card, idx) in sortedCards"
            :key="card.id"
            class="workspace-card"
            :style="{
              top: (idx * 200) + 'px',
              backgroundColor: card.color || '#ffffff'
            }"
            @click="focusOnSource(card)"
          >
            <div class="card-header-info">
              <div class="card-type">
                <span v-if="card.type === 'extract'">
                  📄 발췌 <span class="line-info">Line {{ card.sourceLineStart + 1 }}</span>
                </span>
                <span v-else>📝 메모</span>
              </div>
            </div>
            <div class="card-content">
              <pre v-if="card.type === 'extract'"><code>{{ card.content }}</code></pre>
              <p v-else>{{ card.content }}</p>
            </div>
          </div>

          <div v-if="sortedCards.length === 0" class="empty-state">
            <p>작성된 내용이 없습니다.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 임베드 섹션 -->
    <section v-if="article?.embedUrl" class="embed-section">
      <h2>💻 실행 결과</h2>
      <div class="embed-container">
        <iframe
          :src="getEmbedUrl(article.embedUrl)"
          frameborder="0"
          loading="lazy"
          allowfullscreen
          allowtransparency
        ></iframe>
      </div>
    </section>

    <!-- 하단 버튼 -->
    <footer class="article-footer">
      <button class="delete-btn" @click="deleteArticle">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
        <span>삭제</span>
      </button>

      <button class="edit-btn" @click="editArticle">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
        <span>수정하기</span>
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const article = ref(null)
const topicTitle = ref('')
const highlightedLine = ref(null)
const documentViewer = ref(null)
const workspace = ref(null)

// 문서 라인 배열
const documentLines = computed(() => {
  return article.value?.referenceDocument ? article.value.referenceDocument.split('\n') : []
})

// 카드를 소스 라인 순서대로 정렬
const sortedCards = computed(() => {
  if (!article.value?.cards) return []
  return [...article.value.cards].sort((a, b) => {
    if (a.sourceLineStart === undefined) return 1
    if (b.sourceLineStart === undefined) return -1
    return a.sourceLineStart - b.sourceLineStart
  })
})

// 아티클 로드
onMounted(() => {
  const articleId = route.query.id
  if (!articleId) {
    router.push('/')
    return
  }

  // 모든 localStorage 키를 확인하여 아티클 찾기
  let found = false
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('articles_')) {
      try {
        const articles = JSON.parse(localStorage.getItem(key) || '[]')
        const foundArticle = articles.find(a => a.id === articleId)
        if (foundArticle) {
          article.value = foundArticle
          topicTitle.value = foundArticle.topicTitle || foundArticle.topicId || '주제'
          found = true
          break
        }
      } catch (error) {
        console.error('Failed to parse articles:', error)
      }
    }
  }

  if (!found) {
    alert('아티클을 찾을 수 없습니다.')
    router.push('/')
  }
})

// 목록으로 돌아가기
const goBack = () => {
  router.back()
}

// 아티클 삭제
const deleteArticle = () => {
  if (!confirm('이 글을 삭제하시겠습니까?')) return

  const articleId = route.query.id

  // 모든 localStorage 키를 확인하여 아티클 삭제
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('articles_')) {
      try {
        const articles = JSON.parse(localStorage.getItem(key) || '[]')
        const index = articles.findIndex(a => a.id === articleId)
        if (index !== -1) {
          articles.splice(index, 1)
          localStorage.setItem(key, JSON.stringify(articles))
          alert('글이 삭제되었습니다.')
          router.back()
          return
        }
      } catch (error) {
        console.error('Failed to delete article:', error)
      }
    }
  }
}

// 아티클 수정
const editArticle = () => {
  if (!article.value) return

  router.push({
    path: '/write',
    query: {
      category: article.value.category,
      subcategory: article.value.subcategory,
      page: article.value.page,
      topic: article.value.topicId,
      topicTitle: topicTitle.value,
      editId: article.value.id  // 수정 모드
    }
  })
}

// 원본으로 포커스
const focusOnSource = (card) => {
  if (card.sourceLineStart === undefined) return

  highlightedLine.value = card.sourceLineStart
  const targetLine = document.getElementById(`line-${card.sourceLineStart}`)
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

// 연결선 Y 좌표 계산
const getLineY = (lineIndex) => {
  const lineElement = document.getElementById(`line-${lineIndex}`)
  if (lineElement && documentViewer.value) {
    return lineElement.offsetTop - documentViewer.value.scrollTop + 10
  }
  return lineIndex * 24 + 10
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
  if (lang === 'javascript' || lang === 'typescript' || lang === 'java') {
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

// Embed URL 처리
const getEmbedUrl = (url) => {
  if (!url) return ''

  // CodePen
  if (url.includes('codepen.io')) {
    return url.replace('/pen/', '/embed/') + '?default-tab=result'
  }

  // CodeSandbox
  if (url.includes('codesandbox.io')) {
    return url.replace('/s/', '/embed/')
  }

  // StackBlitz
  if (url.includes('stackblitz.com')) {
    return url + '?embed=1'
  }

  // Vercel
  if (url.includes('vercel.app')) {
    return url
  }

  return url
}

// 날짜 포맷
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}.${month}.${day} ${hours}:${minutes}`
}
</script>

<style lang="scss" scoped>
.article-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
}

.article-header {
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  flex-shrink: 0;

  &:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-accent);
    color: var(--color-text-primary);
  }
}

.article-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }
}

.meta-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.topic-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  background: var(--color-accent);
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.date {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}

.panels-container {
  display: flex;
  flex: 1;
  height: calc(100vh - 300px);
  min-height: 500px;
  position: relative;
}

.left-panel {
  width: 50%;
  background: var(--color-bg-primary);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.right-panel {
  width: 50%;
  background: var(--color-bg-secondary);
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

.language-badge {
  padding: 0.25rem 0.625rem;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
}

.document-viewer {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  position: relative;
}

.document-content {
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.document-line {
  display: flex;
  padding: 0.25rem 0.5rem;
  transition: background 0.1s;

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

.workspace {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
  min-height: 400px;
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
  cursor: pointer;
  transition: box-shadow 0.2s;
  z-index: 1;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}

.card-header-info {
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

.card-source {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  font-family: monospace;
}

.card-content {
  pre {
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-wrap: break-word;
    background: transparent;

    code {
      background: transparent;
      padding: 0;
    }
  }

  p {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-primary);
  }
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-tertiary);
  font-size: 0.9375rem;

  p {
    margin: 0;
  }
}

.embed-section {
  padding: 2rem;
  background: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }
}

.embed-container {
  width: 100%;
  height: 500px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
}

.delete-btn,
.edit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    flex-shrink: 0;
  }
}

.delete-btn {
  background: var(--color-bg-secondary);
  color: #d73a49;

  &:hover {
    border-color: #d73a49;
    background: #fff5f5;
  }

  [data-theme="dark"] & {
    color: #f85149;

    &:hover {
      background: rgba(248, 81, 73, 0.1);
    }
  }
}

.edit-btn {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);

  &:hover {
    background: var(--color-link-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 96, 223, 0.3);
  }
}
</style>
