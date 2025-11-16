<template>
  <div class="subcategory-page">
    <TabNavigation :tabs="tabs" />

    <div class="page-content">
      <header class="page-header">
        <h1>🎨 React 스타일링</h1>
        <p class="page-description">React 컴포넌트 스타일링 방법들을 소개합니다.</p>
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
                <button class="write-btn" @click="goToWrite(topic.id, topic.title)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                  <span>글쓰기</span>
                </button>
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
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TabNavigation from '../../../components/TabNavigation.vue'
import { useArticles } from '../../../composables/useArticles'

const router = useRouter()

const tabs = [
  { name: 'Hooks', path: '/subjects/react/hooks', icon: '🎣' },
  { name: '상태 관리', path: '/subjects/react/state', icon: '📦' },
  { name: '스타일링', path: '/subjects/react/styling', icon: '🎨' },
  { name: '최적화', path: '/subjects/react/optimization', icon: '⚡' }
]

const topics = [
  {
    id: 'css-modules',
    title: 'CSS Modules',
    description: '스코프가 지정된 CSS 스타일링'
  },
  {
    id: 'styled-components',
    title: 'Styled Components',
    description: 'CSS-in-JS의 대표주자'
  },
  {
    id: 'emotion',
    title: 'Emotion',
    description: '고성능 CSS-in-JS 라이브러리'
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: '유틸리티 우선 CSS 프레임워크'
  },
  {
    id: 'sass-scss',
    title: 'Sass/SCSS',
    description: 'CSS 전처리기 활용'
  },
  {
    id: 'css-in-js-comparison',
    title: 'CSS-in-JS 비교',
    description: '다양한 스타일링 방법 비교 분석'
  }
]

// 글 목록 관리
const { getArticles } = useArticles('react', 'styling')

// 글쓰기 페이지로 이동
const goToWrite = (topicId, topicTitle) => {
  router.push({
    path: '/write',
    query: {
      category: 'subjects',
      subcategory: 'react',
      page: 'styling',
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
</style>
