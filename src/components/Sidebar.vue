<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <!-- 홈 링크 -->
      <div class="nav-section">
        <router-link to="/" class="home-link">
          <span class="icon">🏠</span>
          <span>홈</span>
        </router-link>
      </div>

      <!-- 카테고리 목록 -->
      <div
        v-for="category in categories"
        :key="category.id"
        class="nav-section"
      >
        <h4 class="section-title">{{ category.name }}</h4>

        <div
          v-for="subcategory in category.subcategories"
          :key="subcategory.id"
          class="subcategory"
        >
          <button
            class="subcategory-header"
            @click="toggleSubcategory(subcategory.id)"
            :class="{ active: expandedSubcategories.includes(subcategory.id) }"
          >
            <span class="icon">{{ subcategory.icon }}</span>
            <span class="name">{{ subcategory.name }}</span>
            <svg
              class="toggle-icon"
              :class="{ rotated: expandedSubcategories.includes(subcategory.id) }"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <transition name="expand">
            <ul v-if="expandedSubcategories.includes(subcategory.id)" class="nav-list">
              <li v-for="item in subcategory.items" :key="item.id">
                <router-link
                  :to="item.path"
                  class="nav-item"
                  active-class="active"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { categories } from '../data/categories.js'

const expandedSubcategories = ref([])

const toggleSubcategory = (subcategoryId) => {
  const index = expandedSubcategories.value.indexOf(subcategoryId)
  if (index > -1) {
    expandedSubcategories.value.splice(index, 1)
  } else {
    expandedSubcategories.value.push(subcategoryId)
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  min-width: 280px;
  background-color: $bg-secondary;
  border-right: 1px solid $border-color;
  overflow-y: auto;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  padding: $spacing-xl $spacing-md;

  @media (max-width: $breakpoint-lg) {
    width: 240px;
    min-width: 240px;
  }

  @media (max-width: $breakpoint-md) {
    position: fixed;
    left: -280px;
    z-index: $z-index-sidebar;
    transition: left 0.3s ease-in-out;

    &.open {
      left: 0;
    }
  }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.home-link {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-sm;
  color: $text-secondary;
  font-weight: 600;
  transition: $transition-base;
  text-decoration: none;

  &:hover {
    color: $text-primary;
    background-color: rgba($primary-color, 0.05);
  }

  &.active {
    color: $primary-color;
    background-color: rgba($primary-color, 0.1);
  }

  .icon {
    font-size: $font-size-lg;
  }
}

.nav-section {
  margin-bottom: $spacing-md;
}

.section-title {
  font-size: $font-size-xs;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: $text-secondary;
  margin-bottom: $spacing-md;
  padding: 0 $spacing-sm;
}

.subcategory {
  margin-bottom: $spacing-sm;
}

.subcategory-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  background: none;
  border: none;
  border-radius: $border-radius-sm;
  color: $text-secondary;
  font-weight: 600;
  font-size: $font-size-sm;
  cursor: pointer;
  transition: $transition-base;
  text-align: left;

  &:hover {
    background-color: rgba($primary-color, 0.05);
    color: $text-primary;
  }

  &.active {
    color: $primary-color;
    background-color: rgba($primary-color, 0.08);
  }

  .icon {
    font-size: $font-size-base;
  }

  .name {
    flex: 1;
  }

  .toggle-icon {
    color: currentColor;
    transition: transform 0.2s;
    flex-shrink: 0;

    &.rotated {
      transform: rotate(-180deg);
    }
  }
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: $spacing-xl;
  margin-top: $spacing-xs;
}

.nav-item {
  color: $text-secondary;
  padding: $spacing-xs $spacing-md;
  border-radius: $border-radius-sm;
  display: block;
  font-size: $font-size-sm;
  transition: $transition-base;
  text-decoration: none;

  &:hover {
    color: $text-primary;
    background-color: rgba($primary-color, 0.05);
  }

  &.active {
    color: $primary-color;
    background-color: rgba($primary-color, 0.1);
    font-weight: 600;
  }
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
  max-height: 500px;
}
</style>
