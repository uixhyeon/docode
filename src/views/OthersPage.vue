<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="page-icon">🗂️</span>
        기타
      </h1>
      <p class="page-description">
        개발 환경 설정, 도구, 배포, 트러블슈팅 등 개발에 필요한 다양한 지식을 학습합니다.
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

    <!-- 제목 수정 모달 -->
    <div v-if="editingCategory" class="modal-overlay" @click="cancelEdit">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>카테고리 수정</h3>
          <button class="close-btn" @click="cancelEdit">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>아이콘</label>
            <input
              v-model="editForm.icon"
              type="text"
              placeholder="이모지를 입력하세요"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label>이름</label>
            <input
              v-model="editForm.name"
              type="text"
              placeholder="카테고리 이름을 입력하세요"
              class="form-input"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" @click="cancelEdit">취소</button>
          <button class="btn-delete" @click="deleteCategory" v-if="!editingCategory.isNew">삭제</button>
          <button class="btn-save" @click="saveCategory">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedCategories = ref([])
const editingCategory = ref(null)
const editForm = ref({
  name: '',
  icon: ''
})

const categories = ref([
  {
    id: 'git',
    name: 'Git/GitHub',
    icon: '🔀',
    items: [
      '기본 명령어',
      '브랜치 관리',
      '협업 플로우'
    ]
  },
  {
    id: 'deploy',
    name: '배포',
    icon: '🚀',
    items: [
      'Vercel',
      'Netlify',
      'GitHub Pages'
    ]
  },
  {
    id: 'tools',
    name: '개발 도구',
    icon: '🛠️',
    items: [
      'VSCode 팁',
      'DevTools',
      '확장 프로그램'
    ]
  },
  {
    id: 'package',
    name: '패키지 매니저',
    icon: '📦',
    items: [
      'npm',
      'yarn'
    ]
  },
  {
    id: 'build',
    name: '빌드 도구',
    icon: '⚙️',
    items: [
      'Vite',
      'Webpack'
    ]
  },
  {
    id: 'troubleshooting',
    name: '트러블슈팅',
    icon: '🐛',
    items: [
      '자주 만난 에러',
      '디버깅 팁',
      '해결 패턴'
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
const saveCategory = () => {
  if (!editForm.value.name.trim()) {
    alert('이름을 입력해주세요.')
    return
  }

  if (editingCategory.value.isNew) {
    categories.value.push({
      id: editingCategory.value.id,
      name: editForm.value.name,
      icon: editForm.value.icon,
      items: []
    })
  } else {
    const index = categories.value.findIndex(c => c.id === editingCategory.value.id)
    if (index !== -1) {
      categories.value[index].name = editForm.value.name
      categories.value[index].icon = editForm.value.icon
    }
  }

  cancelEdit()
}

// 카테고리 삭제
const deleteCategory = () => {
  if (!confirm('이 카테고리를 삭제하시겠습니까?')) return

  const index = categories.value.findIndex(c => c.id === editingCategory.value.id)
  if (index !== -1) {
    categories.value.splice(index, 1)
  }

  cancelEdit()
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

// 모달 스타일
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
  }
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #6b7280;
  }
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-family: inherit;
  background: white;
  color: #1f2937;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #087ea4;
    box-shadow: 0 0 0 3px rgba(8, 126, 164, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel,
.btn-delete,
.btn-save {
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #f3f4f6;
  color: #6b7280;

  &:hover {
    background: #e5e7eb;
  }
}

.btn-delete {
  background: #fee;
  color: #d73a49;
  margin-right: auto;

  &:hover {
    background: #fdd;
  }
}

.btn-save {
  background: #087ea4;
  color: white;

  &:hover {
    background: #0c5f7a;
    box-shadow: 0 4px 8px rgba(8, 126, 164, 0.3);
  }
}
</style>
