<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="page-icon">🚀</span>
        제작 사이트
      </h1>
      <p class="page-description">
        직접 제작한 프로젝트의 개발 과정과 코드 아키텍처를 공유합니다.
      </p>
    </div>

    <div class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <router-link
          :to="project.path"
          class="project-link"
        >
          <div class="project-header">
            <div class="project-info">
              <span class="project-icon">{{ project.icon }}</span>
              <h2 class="project-name">{{ project.name }}</h2>
            </div>
            <div class="project-description">
              {{ project.description }}
            </div>
          </div>
        </router-link>
        <button class="edit-title-btn" @click="startEditProject(project)">
          제목 수정
        </button>
      </div>

      <!-- 새 프로젝트 추가 버튼 -->
      <button class="add-project-btn" @click="addNewProject">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        <span>새 프로젝트 추가</span>
      </button>
    </div>

    <!-- 제목 수정 모달 -->
    <div v-if="editingProject" class="modal-overlay" @click="cancelEdit">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>프로젝트 수정</h3>
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
            <label>프로젝트 이름</label>
            <input
              v-model="editForm.name"
              type="text"
              placeholder="프로젝트 이름을 입력하세요"
              class="form-input"
            />
          </div>
          <div class="form-group">
            <label>설명</label>
            <textarea
              v-model="editForm.description"
              placeholder="프로젝트 설명을 입력하세요"
              class="form-textarea"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label>경로</label>
            <input
              v-model="editForm.path"
              type="text"
              placeholder="/production-sites/project-name"
              class="form-input"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" @click="cancelEdit">취소</button>
          <button class="btn-delete" @click="deleteProject" v-if="!editingProject.isNew">삭제</button>
          <button class="btn-save" @click="saveProject">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const editingProject = ref(null)
const editForm = ref({
  name: '',
  icon: '',
  description: '',
  path: ''
})

const projects = ref([
  {
    id: 'code-archive',
    name: '코드 아카이브',
    icon: '📦',
    description: '이 프로젝트의 제작 과정과 주요 기능 설명',
    path: '/production-sites/code-archive'
  }
])

// 새 프로젝트 추가
const addNewProject = () => {
  const newProject = {
    id: 'project-' + Date.now(),
    name: '',
    icon: '📁',
    description: '',
    path: '',
    isNew: true
  }
  editingProject.value = newProject
  editForm.value = {
    name: '',
    icon: '📁',
    description: '',
    path: '/production-sites/'
  }
}

// 프로젝트 수정 시작
const startEditProject = (project) => {
  editingProject.value = { ...project }
  editForm.value = {
    name: project.name,
    icon: project.icon,
    description: project.description,
    path: project.path
  }
}

// 프로젝트 저장
const saveProject = () => {
  if (!editForm.value.name.trim()) {
    alert('프로젝트 이름을 입력해주세요.')
    return
  }

  if (editingProject.value.isNew) {
    projects.value.push({
      id: editingProject.value.id,
      name: editForm.value.name,
      icon: editForm.value.icon,
      description: editForm.value.description,
      path: editForm.value.path
    })
  } else {
    const index = projects.value.findIndex(p => p.id === editingProject.value.id)
    if (index !== -1) {
      projects.value[index].name = editForm.value.name
      projects.value[index].icon = editForm.value.icon
      projects.value[index].description = editForm.value.description
      projects.value[index].path = editForm.value.path
    }
  }

  cancelEdit()
}

// 프로젝트 삭제
const deleteProject = () => {
  if (!confirm('이 프로젝트를 삭제하시겠습니까?')) return

  const index = projects.value.findIndex(p => p.id === editingProject.value.id)
  if (index !== -1) {
    projects.value.splice(index, 1)
  }

  cancelEdit()
}

// 편집 취소
const cancelEdit = () => {
  editingProject.value = null
  editForm.value = {
    name: '',
    icon: '',
    description: '',
    path: ''
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

.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;

  &:hover {
    border-color: #087ea4;
    box-shadow: 0 4px 12px rgba(8, 126, 164, 0.15);
  }
}

.project-link {
  text-decoration: none;
  display: block;
}

.project-header {
  padding: 1.5rem;
  transition: background 0.2s;

  .project-link:hover & {
    background: #f9fafb;
  }
}

.project-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.project-icon {
  font-size: 1.75rem;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.project-description {
  font-size: 0.9375rem;
  color: #6b7280;
  padding-left: 2.75rem;
  line-height: 1.6;
}

.edit-title-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.8125rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  text-align: right;
  transition: color 0.2s;
  display: block;
  width: 100%;

  &:hover {
    color: #6b7280;
    text-decoration: underline;
  }
}

.add-project-btn {
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

.form-input,
.form-textarea {
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

.form-textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.6;
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
