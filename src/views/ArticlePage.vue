<template>
  <div class="article-page">
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

      <button class="delete-btn" @click="deleteArticle">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
        <span>삭제</span>
      </button>
    </header>

    <div class="article-content">
      <!-- 원본 문서 섹션 -->
      <section v-if="article?.referenceDocument" class="reference-section">
        <h2>📄 원본 문서</h2>
        <div class="reference-document">
          <pre><code>{{ article.referenceDocument }}</code></pre>
        </div>
      </section>

      <!-- 카드 목록 -->
      <section class="cards-section">
        <h2>📝 발췌 내용</h2>
        <div class="cards-container">
          <div
            v-for="card in sortedCards"
            :key="card.id"
            class="article-card"
            :style="{ borderLeftColor: card.color || '#0060df' }"
          >
            <div class="card-header">
              <span class="card-type-badge">
                {{ card.type === 'extract' ? '발췌' : card.type === 'note' ? '노트' : '링크' }}
              </span>
              <span v-if="card.sourceLineStart !== undefined" class="line-reference">
                라인 {{ card.sourceLineStart + 1 }}
                <span v-if="card.sourceLineEnd !== undefined && card.sourceLineEnd !== card.sourceLineStart">
                  - {{ card.sourceLineEnd + 1 }}
                </span>
              </span>
            </div>
            <div class="card-content">
              <pre v-if="card.type === 'extract'"><code>{{ card.content }}</code></pre>
              <p v-else>{{ card.content }}</p>
            </div>
          </div>

          <div v-if="!article?.cards || article.cards.length === 0" class="empty-state">
            <p>작성된 내용이 없습니다.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const article = ref(null)
const topicTitle = ref('')

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
      const articles = JSON.parse(localStorage.getItem(key) || '[]')
      const foundArticle = articles.find(a => a.id === articleId)
      if (foundArticle) {
        article.value = foundArticle
        topicTitle.value = foundArticle.topicTitle || foundArticle.topicId || '주제'
        found = true
        break
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
      const articles = JSON.parse(localStorage.getItem(key) || '[]')
      const index = articles.findIndex(a => a.id === articleId)
      if (index !== -1) {
        articles.splice(index, 1)
        localStorage.setItem(key, JSON.stringify(articles))
        alert('글이 삭제되었습니다.')
        router.back()
        return
      }
    }
  }
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.article-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-border-light);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.back-btn,
.delete-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background: var(--color-bg-primary);
    border-color: var(--color-accent);
  }

  svg {
    flex-shrink: 0;
  }
}

.delete-btn {
  margin-left: auto;
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

.article-meta {
  flex: 1;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

.meta-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.topic-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  background: var(--color-accent);
  color: white;
  border-radius: 4px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.date {
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.reference-section,
.cards-section {
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1.25rem;
  }
}

.reference-document {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;

  pre {
    margin: 0;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-wrap: break-word;

    code {
      background: transparent;
      padding: 0;
    }
  }
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.article-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-left-width: 4px;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card-type-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.line-reference {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  font-family: 'Fira Code', 'Consolas', monospace;
}

.card-content {
  pre {
    margin: 0;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-wrap: break-word;
    background: var(--color-bg-secondary);
    padding: 1rem;
    border-radius: 6px;

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
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-text-tertiary);

  p {
    margin: 0;
    font-size: 1rem;
  }
}
</style>
