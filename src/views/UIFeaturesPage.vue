<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="page-icon">🎨</span>
        UI/기능 구현
      </h1>
      <p class="page-description">
        사용자 인터페이스와 상호작용을 구현하는 다양한 패턴과 기법을 학습합니다.
      </p>
    </div>

    <div class="categories">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-section"
      >
        <button
          class="category-header"
          @click="toggleCategory(category.id)"
          :class="{ active: expandedCategories.includes(category.id) }"
        >
          <div class="category-info">
            <span class="category-icon">{{ category.icon }}</span>
            <h2 class="category-name">{{ category.name }}</h2>
            <span class="item-count">{{ category.items.length }}개</span>
          </div>
          <svg
            class="toggle-icon"
            :class="{ rotated: expandedCategories.includes(category.id) }"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <transition name="expand">
          <div v-if="expandedCategories.includes(category.id)" class="category-items">
            <div
              v-for="item in category.items"
              :key="item"
              class="category-item"
            >
              <span class="item-dot">•</span>
              <span class="item-name">{{ item }}</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedCategories = ref([])

const categories = [
  {
    id: 'interaction',
    name: '인터랙션',
    icon: '🖱️',
    items: [
      '토글',
      '탭',
      '모달',
      '드롭다운',
      '아코디언',
      '캐러셀/슬라이더',
      '툴팁',
      '드래그 앤 드롭'
    ]
  },
  {
    id: 'layout',
    name: '레이아웃',
    icon: '📐',
    items: [
      '그리드',
      '플렉스',
      '반응형'
    ]
  },
  {
    id: 'animation',
    name: '애니메이션',
    icon: '✨',
    items: [
      'Transition',
      'Transform',
      '스크롤 효과'
    ]
  },
  {
    id: 'charts',
    name: '차트/그래프',
    icon: '📊',
    items: [
      '선 그래프',
      '막대 그래프',
      '원 그래프'
    ]
  }
]

const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}
</script>

<style lang="scss" scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.page-icon {
  font-size: 3rem;
}

.page-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-section {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
}

.category-header {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }

  &.active {
    background: #f3f4f6;
  }
}

.category-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-icon {
  font-size: 1.75rem;
}

.category-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.item-count {
  padding: 0.25rem 0.75rem;
  background: #087ea4;
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.toggle-icon {
  color: #6b7280;
  transition: transform 0.3s;

  &.rotated {
    transform: rotate(-180deg);
  }
}

.category-items {
  padding: 0 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
    transform: translateX(4px);
  }
}

.item-dot {
  color: #087ea4;
  font-size: 1.25rem;
  font-weight: 700;
}

.item-name {
  color: #374151;
  font-size: 0.9375rem;
  font-weight: 500;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>
