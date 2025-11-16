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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 정적 프로젝트 목록
const projects = ref([
  {
    id: 'code-archive',
    name: '코드 아카이브',
    icon: '📦',
    description: '개발자를 위한 코드 스니펫 및 학습 노트 관리 애플리케이션',
    path: '/production-sites/code-archive'
  },
  {
    id: 'tenbyten',
    name: '텐바이텐',
    icon: '🛒',
    description: '온라인 디자인 문구 쇼핑몰 클론 프로젝트',
    path: '/production-sites/tenbyten'
  },
  {
    id: 'clonecoding',
    name: '클론코딩',
    icon: '💻',
    description: '다양한 웹사이트 클론코딩 프로젝트 모음',
    path: '/production-sites/clonecoding'
  },
  {
    id: 'gukjungpark',
    name: '국중박 리뉴얼',
    icon: '🎭',
    description: '국립중앙박물관 웹사이트 리뉴얼 프로젝트',
    path: '/production-sites/gukjungpark'
  },
  {
    id: 'mataju',
    name: '마타주 짐배송',
    icon: '📦',
    description: '편리한 짐 배송 서비스 플랫폼',
    path: '/production-sites/mataju'
  }
])
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
</style>