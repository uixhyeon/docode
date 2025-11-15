<template>
  <aside class="mdn-sidebar" :class="{ 'is-open': isOpen }">
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li
          v-for="category in categories"
          :key="category.path"
          class="nav-item"
        >
          <div
            class="nav-item-header"
            @click="toggleCategory(category.path)"
          >
            <router-link
              :to="category.path"
              class="nav-link"
              :class="{ 'is-active': isActive(category.path) }"
              @click.stop
            >
              <span class="nav-icon">{{ category.icon }}</span>
              <span class="nav-text">{{ category.name }}</span>
            </router-link>
            <button
              v-if="category.children && category.children.length > 0"
              class="expand-btn"
              @click.stop="toggleCategory(category.path)"
              :aria-label="expandedCategories.has(category.path) ? '접기' : '펼치기'"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                :class="{ 'is-expanded': expandedCategories.has(category.path) }"
              >
                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"/>
              </svg>
            </button>
          </div>

          <!-- Subcategories -->
          <ul
            v-if="category.children && category.children.length > 0"
            class="sub-nav-list"
            :class="{ 'is-expanded': expandedCategories.has(category.path) }"
          >
            <li
              v-for="child in category.children"
              :key="child.path"
              class="sub-nav-item"
            >
              <router-link
                :to="child.path"
                class="sub-nav-link"
                :class="{ 'is-active': isActive(child.path) }"
              >
                <span class="sub-nav-text">{{ child.name }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const expandedCategories = ref(new Set(['/subjects']))

const categories = [
  {
    name: '과목/프레임워크',
    icon: '📚',
    path: '/subjects',
    children: [
      { name: 'React', path: '/subjects/react' },
      { name: 'Vue', path: '/subjects/vue' },
      { name: 'JavaScript', path: '/subjects/javascript' },
      { name: 'TypeScript', path: '/subjects/typescript' }
    ]
  },
  {
    name: 'UI/기능 구현',
    icon: '🎨',
    path: '/ui-features',
    children: [
      { name: '인터랙션', path: '/ui-features/interaction' },
      { name: '레이아웃', path: '/ui-features/layout' },
      { name: '애니메이션', path: '/ui-features/animation' },
      { name: '컴포넌트', path: '/ui-features/component' }
    ]
  },
  {
    name: '기능 개발',
    icon: '🔧',
    path: '/development',
    children: [
      { name: 'API 연동', path: '/development/api' },
      { name: '상태 관리', path: '/development/state' },
      { name: '최적화', path: '/development/optimization' },
      { name: '테스팅', path: '/development/testing' }
    ]
  },
  {
    name: '기타',
    icon: '🗂️',
    path: '/others',
    children: [
      { name: '도구', path: '/others/tools' },
      { name: '참고 자료', path: '/others/references' },
      { name: '팁', path: '/others/tips' }
    ]
  }
]

const toggleCategory = (path) => {
  if (expandedCategories.value.has(path)) {
    expandedCategories.value.delete(path)
  } else {
    expandedCategories.value.add(path)
  }
}

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<style lang="scss" scoped>
.mdn-sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  background: var(--color-bg-sidebar);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  transition: transform 0.3s ease;
  z-index: var(--z-index-sidebar, 90);

  @media (max-width: 768px) {
    transform: translateX(-100%);

    &.is-open {
      transform: translateX(0);
    }
  }
}

.sidebar-nav {
  padding: 1.5rem 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 0.25rem;
}

.nav-item-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  &.is-active {
    background: var(--color-bg-tertiary);
    color: var(--color-accent);
    border-left-color: var(--color-accent);
    font-weight: 600;
  }
}

.nav-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
}

.nav-text {
  flex: 1;
}

.expand-btn {
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  svg {
    transition: transform 0.2s;

    &.is-expanded {
      transform: rotate(0deg);
    }
  }

  svg:not(.is-expanded) {
    transform: rotate(-90deg);
  }
}

.sub-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.is-expanded {
    max-height: 500px;
  }
}

.sub-nav-item {
  margin: 0;
}

.sub-nav-link {
  display: block;
  padding: 0.5rem 1.5rem 0.5rem 3.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  &.is-active {
    background: var(--color-bg-tertiary);
    color: var(--color-accent);
    border-left-color: var(--color-accent);
    font-weight: 600;
  }
}

.sub-nav-text {
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: -1rem;
    color: var(--color-text-tertiary);
  }
}

/* Custom scrollbar */
.mdn-sidebar {
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 4px;

    &:hover {
      background: var(--color-text-tertiary);
    }
  }
}
</style>
