<template>
  <nav class="tab-navigation">
    <div class="tab-list">
      <router-link
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="tab-item"
        :class="{ 'is-active': isActiveTab(tab.path) }"
      >
        <span class="tab-icon" v-if="tab.icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const route = useRoute()

const isActiveTab = (path) => {
  return route.path === path
}
</script>

<style lang="scss" scoped>
.tab-navigation {
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-light);
  margin-bottom: 2rem;
  position: sticky;
  top: var(--header-height);
  z-index: 50;
}

.tab-list {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  position: relative;

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-tertiary);
  }

  &.is-active {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
}

.tab-icon {
  font-size: 1.125rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.tab-label {
  @media (max-width: 480px) {
    font-size: 0.8125rem;
  }
}
</style>
