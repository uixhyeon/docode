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
        <div class="category-header-wrapper">
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
          <button class="edit-title-btn" @click="startEditCategory(category)">
            제목 수정
          </button>
        </div>

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

      <!-- 새 카테고리 추가 버튼 -->
      <button class="add-content-btn" @click="addNewCategory">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        <span>새 카테고리 추가</span>
      </button>
    </div>

    <!-- EditModal 컴포넌트 -->
    <EditModal
      :isOpen="!!editingCategory"
      :title="editingCategory?.isNew ? '새 카테고리 추가' : '카테고리 수정'"
      :iconValue="editForm.icon"
      :nameValue="editForm.name"
      :showDelete="!editingCategory?.isNew"
      :loading="isLoading"
      @close="cancelEdit"
      @save="saveCategory"
      @delete="deleteCategory"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EditModal from '../components/EditModal.vue'
import { useToast } from '../composables/useToast'

const { success, error, warning } = useToast()

const expandedCategories = ref([])
const editingCategory = ref(null)
const editForm = ref({
  name: '',
  icon: ''
})
const isLoading = ref(false)

const categories = ref([
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
])

const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

// 새 카테고리 추가
const addNewCategory = () => {
  const newCategory = {
    id: 'category-' + Date.now(),
    name: '',
    icon: '📁',
    items: [],
    isNew: true
  }
  editingCategory.value = newCategory
  editForm.value = {
    name: '',
    icon: '📁'
  }
}

// 카테고리 수정 시작
const startEditCategory = (category) => {
  editingCategory.value = { ...category }
  editForm.value = {
    name: category.name,
    icon: category.icon
  }
}

// 카테고리 저장
const saveCategory = (data) => {
  try {
    isLoading.value = true

    // 검증
    if (!data.name.trim()) {
      warning('이름을 입력해주세요.')
      return
    }

    if (data.name.trim().length > 50) {
      warning('이름은 50자를 초과할 수 없습니다.')
      return
    }

    // 중복 체크
    const isDuplicate = categories.value.some(
      c => c.id !== editingCategory.value?.id && c.name.toLowerCase() === data.name.trim().toLowerCase()
    )

    if (isDuplicate) {
      warning('이미 존재하는 카테고리 이름입니다.')
      return
    }

    if (editingCategory.value.isNew) {
      // 새 카테고리 추가
      categories.value.push({
        id: editingCategory.value.id,
        name: data.name.trim(),
        icon: data.icon.trim() || '📁',
        items: []
      })
      success('카테고리가 추가되었습니다.')
    } else {
      // 기존 카테고리 수정
      const index = categories.value.findIndex(c => c.id === editingCategory.value.id)
      if (index !== -1) {
        categories.value[index].name = data.name.trim()
        categories.value[index].icon = data.icon.trim() || categories.value[index].icon
      }
      success('카테고리가 수정되었습니다.')
    }

    cancelEdit()
  } catch (err) {
    console.error('Save error:', err)
    error('저장 중 오류가 발생했습니다.')
  } finally {
    isLoading.value = false
  }
}

// 카테고리 삭제
const deleteCategory = () => {
  try {
    isLoading.value = true

    const index = categories.value.findIndex(c => c.id === editingCategory.value.id)
    if (index !== -1) {
      const categoryName = categories.value[index].name
      categories.value.splice(index, 1)
      success(`"${categoryName}" 카테고리가 삭제되었습니다.`)
    }

    cancelEdit()
  } catch (err) {
    console.error('Delete error:', err)
    error('삭제 중 오류가 발생했습니다.')
  } finally {
    isLoading.value = false
  }
}

// 편집 취소
const cancelEdit = () => {
  editingCategory.value = null
  editForm.value = {
    name: '',
    icon: ''
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

.category-header-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.edit-title-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.8125rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s;
  align-self: flex-end;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: #6b7280;
    text-decoration: underline;
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

.add-content-btn {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  color: #9ca3af;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    background: #f9fafb;
    border-color: #087ea4;
    color: #087ea4;
  }

  svg {
    flex-shrink: 0;
  }
}
</style>
