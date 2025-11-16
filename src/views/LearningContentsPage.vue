<template>
  <div class="learning-contents-page">
    <div class="page-header">
      <h1 class="page-title">📚 학습 자료</h1>
      <p class="page-description">
        각 주제별 개념, 주요 코드, 설명을 확인하고 학습기록에 복사할 수 있습니다
      </p>
    </div>

    <div class="content-layout">
      <!-- 카테고리 선택 -->
      <div class="category-sidebar">
        <h2 class="sidebar-title">카테고리</h2>
        <div class="category-list">
          <button
            v-for="(category, key) in categories"
            :key="key"
            :class="['category-btn', { active: selectedCategory === key }]"
            @click="selectCategory(key)"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span>{{ category.name }}</span>
          </button>
        </div>
      </div>

      <!-- 주제 목록 및 내용 -->
      <div class="content-area">
        <div v-if="selectedCategory" class="topics">
          <h2 class="category-name">{{ categories[selectedCategory].name }}</h2>

          <div class="topic-list">
            <div
              v-for="(topic, key) in getTopics(selectedCategory)"
              :key="key"
              class="topic-card"
            >
              <div class="topic-header">
                <h3 class="topic-title">{{ topic.title }}</h3>
                <button
                  class="copy-btn"
                  @click="copyToClipboard(topic.title, topic.content)"
                  title="학습기록에 복사"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  복사
                </button>
              </div>

              <div class="topic-content">
                <div class="content-preview markdown-body" v-html="renderMarkdown(topic.content)"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="no-selection">
          <p>왼쪽에서 카테고리를 선택하세요</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { marked } from 'marked'
import learningContents from '@/data/learning-contents.json'
import { useToast } from '@/composables/useToast'

const { success } = useToast()

const categories = {
  'html-css': { name: 'HTML/CSS', icon: '🎨' },
  'javascript': { name: 'JavaScript', icon: '⚡' },
  'typescript': { name: 'TypeScript', icon: '🔷' },
  'react': { name: 'React', icon: '⚛️' },
  'vue': { name: 'Vue', icon: '💚' },
  'firebase': { name: 'Firebase', icon: '🔥' }
}

const selectedCategory = ref(null)

const selectCategory = (category) => {
  selectedCategory.value = category
}

const getTopics = (category) => {
  return learningContents[category] || {}
}

const renderMarkdown = (content) => {
  if (!content) return ''
  return marked(content)
}

const copyToClipboard = async (title, content) => {
  try {
    const text = `제목: ${title}\n\n${content}`
    await navigator.clipboard.writeText(text)
    success('클립보드에 복사되었습니다! 학습기록 페이지에서 붙여넣기 하세요.')
  } catch (error) {
    console.error('Failed to copy:', error)
  }
}
</script>

<style lang="scss" scoped>
.learning-contents-page {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.page-description {
  font-size: 1.125rem;
  color: #6b7280;
}

.content-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// 카테고리 사이드바
.category-sidebar {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 80px;
}

.sidebar-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-btn {
  width: 100%;
  padding: 0.875rem 1rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  color: #374151;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;

  &:hover {
    border-color: #087ea4;
    background: #f0f9ff;
  }

  &.active {
    border-color: #087ea4;
    background: #087ea4;
    color: white;
  }
}

.category-icon {
  font-size: 1.5rem;
}

// 콘텐츠 영역
.content-area {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  min-height: 600px;
}

.category-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.topic-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.topic-card {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: #087ea4;
    box-shadow: 0 4px 12px rgba(8, 126, 164, 0.1);
  }
}

.topic-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.topic-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.copy-btn {
  padding: 0.625rem 1.25rem;
  background: #087ea4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0c5f7a;
    transform: translateY(-1px);
  }

  svg {
    flex-shrink: 0;
  }
}

.topic-content {
  .content-preview {
    max-height: 600px;
    overflow-y: auto;
  }
}

.no-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #9ca3af;
  font-size: 1.125rem;
}

// 마크다운 스타일
.markdown-body {
  :deep(h1) {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  :deep(h2) {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 0.875rem;
    color: #1f2937;
  }

  :deep(h3) {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }

  :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: #374151;
  }

  :deep(ul), :deep(ol) {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  :deep(li) {
    margin-bottom: 0.5rem;
    color: #374151;
  }

  :deep(strong) {
    font-weight: 700;
    color: #1f2937;
  }

  :deep(em) {
    font-style: italic;
  }

  :deep(code) {
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-size: 0.875em;
    color: #d63384;
  }

  :deep(pre) {
    background: #1f2937;
    color: #f3f4f6;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  :deep(blockquote) {
    border-left: 4px solid #087ea4;
    padding-left: 1rem;
    color: #6b7280;
    margin-bottom: 1rem;
  }
}
</style>
