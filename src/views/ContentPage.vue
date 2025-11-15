<template>
  <div class="content-page">
    <div class="page-header">
      <div class="breadcrumb">
        <router-link to="/">🏠 홈</router-link>
        <span class="separator">/</span>
        <span>{{ categoryName }}</span>
        <span class="separator">/</span>
        <span>{{ subcategoryName }}</span>
        <span class="separator">/</span>
        <span class="current">{{ itemName }}</span>
      </div>
      <h1 class="page-title">{{ itemName }}</h1>
    </div>

    <div class="content-body">
      <div class="info-box">
        <div class="info-icon">📚</div>
        <div>
          <h3>학습 자료 준비 중</h3>
          <p>이 페이지의 학습 자료는 현재 준비 중입니다.</p>
          <p>곧 추가될 예정이니 조금만 기다려주세요!</p>
        </div>
      </div>

      <div class="placeholder-content">
        <h2>{{ itemName }}에 대하여</h2>
        <p>
          이 섹션에서는 <strong>{{ itemName }}</strong>에 대한 다양한 예제와 설명을 제공할 예정입니다.
        </p>

        <h3>학습 목표</h3>
        <ul>
          <li>{{ itemName }}의 기본 개념 이해</li>
          <li>실전 예제를 통한 활용법 습득</li>
          <li>베스트 프랙티스 학습</li>
        </ul>

        <div class="code-example">
          <h3>예제 코드</h3>
          <pre><code>// {{ itemName }} 예제 코드
// 곧 추가될 예정입니다...</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '../data/categories.js'

const route = useRoute()

const categoryName = computed(() => {
  const category = categories.find(c => c.id === route.params.category)
  return category ? category.name : ''
})

const subcategoryName = computed(() => {
  const category = categories.find(c => c.id === route.params.category)
  if (!category) return ''
  const subcategory = category.subcategories.find(s => s.id === route.params.subcategory)
  return subcategory ? subcategory.name : ''
})

const itemName = computed(() => {
  const category = categories.find(c => c.id === route.params.category)
  if (!category) return ''
  const subcategory = category.subcategories.find(s => s.id === route.params.subcategory)
  if (!subcategory) return ''
  const item = subcategory.items.find(i => i.id === route.params.item)
  return item ? item.name : ''
})
</script>

<style lang="scss" scoped>
.content-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
}

.breadcrumb {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  a {
    color: #087ea4;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: #0c5f7a;
      text-decoration: underline;
    }
  }

  .separator {
    color: #d1d5db;
  }

  .current {
    color: #1f2937;
    font-weight: 600;
  }
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.content-body {
  h2 {
    font-size: 1.875rem;
    color: #1f2937;
    margin: 2rem 0 1rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;

    &:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #374151;
    margin: 1.5rem 0 1rem;
  }

  p {
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;

    li {
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: #087ea4;
    font-weight: 600;
  }
}

.info-box {
  background: linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%);
  border: 2px solid #93c5fd;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;

  .info-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.125rem;
    color: #1e40af;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #1e3a8a;
    margin: 0.25rem 0;
    font-size: 0.9375rem;
  }
}

.placeholder-content {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
}

.code-example {
  margin-top: 2rem;

  pre {
    background: #282c34;
    border-radius: 8px;
    padding: 1.5rem;
    overflow-x: auto;

    code {
      color: #abb2bf;
      font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
      font-size: 0.9375rem;
      line-height: 1.6;
    }
  }
}
</style>
