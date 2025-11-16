<template>
  <div class="mataju-page">
    <nav class="sticky-nav" :class="{ hidden: !showNav }">
      <div class="nav-content">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="{ active: activeSection === section.id }"
          class="nav-item"
        >
          {{ section.title }}
        </button>
      </div>
    </nav>

    <div class="page-content">
      <section id="overview" class="content-section">
        <h1 class="main-title">📦 마타주 짐배송</h1>
        <p class="subtitle">편리한 짐 배송 서비스 플랫폼</p>

        <div class="info-card">
          <h2>프로젝트 소개</h2>
          <p>
            마타주는 이사, 해외 배송, 대용량 짐 운송 등 다양한 배송 수요를 연결하는 플랫폼입니다.
            사용자가 쉽고 빠르게 배송 신청을 하고, 실시간으로 배송 상태를 확인할 수 있는 서비스를 제공합니다.
          </p>
        </div>

        <div class="links-grid">
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">🌐</div>
            <div class="link-title">서비스 사이트</div>
            <div class="link-url">준비중</div>
          </a>
          <a href="#" target="_blank" class="link-card">
            <div class="link-icon">💻</div>
            <div class="link-title">GitHub</div>
            <div class="link-url">준비중</div>
          </a>
        </div>
      </section>

      <section id="features" class="content-section">
        <h2>✨ 주요 기능</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>간편 배송 신청</h3>
            <p>직관적인 폼으로 몇 번의 클릭만으로 배송 신청 완료</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>실시간 견적</h3>
            <p>거리, 무게, 크기를 고려한 정확한 견적 즉시 확인</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3>위치 추적</h3>
            <p>GPS 기반 실시간 배송 현황 및 위치 확인</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>안전한 결제</h3>
            <p>다양한 결제 수단과 에스크로 시스템으로 안전한 거래</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⭐</div>
            <h3>리뷰 시스템</h3>
            <p>실제 이용자의 리뷰로 신뢰할 수 있는 기사 선택</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>푸시 알림</h3>
            <p>배송 상태 변경 시 실시간 알림 전송</p>
          </div>
        </div>
      </section>

      <section id="userflow" class="content-section">
        <h2>🔄 사용자 플로우</h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h3>출발지/도착지 입력</h3>
              <p>주소 검색 API를 통한 정확한 위치 입력</p>
              <div class="code-block">
                <pre><code>// Kakao 주소 검색 API 연동
new daum.Postcode({
  oncomplete: function(data) {
    const fullAddress = data.address;
    const extraAddress = data.buildingName || '';
    setAddress({ fullAddress, extraAddress });
  }
}).open();</code></pre>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h3>짐 정보 입력</h3>
              <p>크기, 무게, 수량 등 상세 정보 입력</p>
              <ul>
                <li>이미지 업로드 기능</li>
                <li>특수 품목 선택 옵션</li>
                <li>포장 서비스 추가</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h3>견적 확인</h3>
              <p>입력 정보 기반 자동 견적 산출</p>
              <div class="code-block">
                <pre><code>function calculatePrice(distance, weight, volume) {
  const basePrice = 10000;
  const distanceFee = distance * 500;
  const weightFee = weight * 1000;
  const volumeFee = volume * 200;

  return basePrice + distanceFee + weightFee + volumeFee;
}</code></pre>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h3>기사 매칭</h3>
              <p>가용 기사 자동 매칭 및 수락 대기</p>
              <ul>
                <li>실시간 알림</li>
                <li>기사 프로필 확인</li>
                <li>채팅 기능</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h3>배송 진행</h3>
              <p>실시간 위치 추적 및 상태 업데이트</p>
              <ul>
                <li>픽업 완료</li>
                <li>운송 중</li>
                <li>배송 완료</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h3>결제 및 리뷰</h3>
              <p>배송 완료 후 결제 및 평가</p>
              <ul>
                <li>자동 결제 처리</li>
                <li>별점 및 후기 작성</li>
                <li>포인트 적립</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" class="content-section">
        <h2>🛠 기술 스택</h2>

        <div class="tech-grid">
          <div class="tech-category">
            <h3>Frontend</h3>
            <ul>
              <li><strong>React</strong> - UI 컴포넌트</li>
              <li><strong>Redux</strong> - 상태 관리</li>
              <li><strong>Styled Components</strong> - 스타일링</li>
              <li><strong>React Query</strong> - 서버 상태 관리</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>Backend</h3>
            <ul>
              <li><strong>Node.js</strong> - 서버</li>
              <li><strong>Express</strong> - API 프레임워크</li>
              <li><strong>MongoDB</strong> - 데이터베이스</li>
              <li><strong>Socket.io</strong> - 실시간 통신</li>
            </ul>
          </div>

          <div class="tech-category">
            <h3>External APIs</h3>
            <ul>
              <li><strong>Kakao Map API</strong> - 지도 및 주소 검색</li>
              <li><strong>Toss Payments</strong> - 결제</li>
              <li><strong>Firebase Cloud Messaging</strong> - 푸시 알림</li>
              <li><strong>AWS S3</strong> - 이미지 저장</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="challenges" class="content-section">
        <h2>💡 기술적 도전과 해결</h2>

        <div class="insights-list">
          <div class="insight-item">
            <div class="insight-icon">📍</div>
            <div class="insight-content">
              <h3>실시간 위치 추적</h3>
              <p class="challenge-desc">
                <strong>문제:</strong> 기사의 위치를 실시간으로 추적하고 사용자에게 전달하는 시스템
              </p>
              <p class="solution-desc">
                <strong>해결:</strong> Socket.io와 Geolocation API를 결합하여 1분 단위로 위치 업데이트
              </p>
              <div class="code-block">
                <pre><code>// 기사 앱에서 위치 전송
navigator.geolocation.watchPosition((position) => {
  socket.emit('updateLocation', {
    orderId: currentOrder.id,
    coords: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  });
}, null, { enableHighAccuracy: true });

// 사용자 앱에서 위치 수신
socket.on('locationUpdated', (data) => {
  updateMarkerPosition(data.coords);
});</code></pre>
              </div>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">💳</div>
            <div class="insight-content">
              <h3>안전한 결제 시스템</h3>
              <p class="challenge-desc">
                <strong>문제:</strong> 배송 전 선결제 시 분쟁 발생 가능성
              </p>
              <p class="solution-desc">
                <strong>해결:</strong> 에스크로 시스템 도입으로 배송 완료 확인 후 기사에게 정산
              </p>
            </div>
          </div>

          <div class="insight-item">
            <div class="insight-icon">🔄</div>
            <div class="insight-content">
              <h3>매칭 알고리즘</h3>
              <p class="challenge-desc">
                <strong>문제:</strong> 효율적인 기사-고객 매칭
              </p>
              <p class="solution-desc">
                <strong>해결:</strong> 거리, 평점, 응답률을 종합한 가중치 기반 매칭 알고리즘 구현
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learnings" class="content-section">
        <h2>📚 배운 점</h2>

        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon">🔄</div>
            <h3>실시간 통신</h3>
            <p>Socket.io를 활용한 양방향 실시간 통신 구현 경험</p>
          </div>

          <div class="future-card">
            <div class="future-icon">💰</div>
            <h3>결제 시스템</h3>
            <p>PG사 연동 및 에스크로 시스템 구축 경험</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🗺️</div>
            <h3>지도 API 활용</h3>
            <p>Kakao Map API를 활용한 위치 기반 서비스 개발</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📱</div>
            <h3>푸시 알림</h3>
            <p>FCM을 활용한 크로스 플랫폼 푸시 알림 구현</p>
          </div>

          <div class="future-card">
            <div class="future-icon">🔐</div>
            <h3>보안</h3>
            <p>개인정보 보호 및 안전한 데이터 처리 방법 학습</p>
          </div>

          <div class="future-card">
            <div class="future-icon">📊</div>
            <h3>데이터 분석</h3>
            <p>배송 데이터 분석을 통한 서비스 개선 인사이트 도출</p>
          </div>
        </div>
      </section>

      <section id="future" class="content-section">
        <h2>🔮 향후 개선 계획</h2>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3>AI 견적 예측</h3>
            <p>과거 데이터 기반 머신러닝 견적 시스템</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3>경로 최적화</h3>
            <p>다중 배송지 경로 최적화 알고리즘</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📸</div>
            <h3>AR 부피 측정</h3>
            <p>카메라로 짐 크기 자동 측정 기능</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>국제 배송</h3>
            <p>해외 배송 서비스 확장</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'overview', title: '개요' },
  { id: 'features', title: '주요 기능' },
  { id: 'userflow', title: '사용자 플로우' },
  { id: 'tech', title: '기술 스택' },
  { id: 'challenges', title: '기술적 도전' },
  { id: 'learnings', title: '배운 점' },
  { id: 'future', title: '향후 계획' }
]

const showNav = ref(true)
const activeSection = ref('overview')
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    showNav.value = false
  } else {
    showNav.value = true
  }
  lastScrollY = currentScrollY
  updateActiveSection()
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 150
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 100
    const elementPosition = element.offsetTop - offset
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
// CodeArchivePage 기본 스타일 재사용
.mataju-page {
  min-height: 100vh;
  background: var(--color-bg-secondary);
  padding-top: 80px;
}

.sticky-nav {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &.hidden {
    transform: translateY(-100%);
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.nav-item {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: var(--color-text-primary);
  }

  &.active {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
  }
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-section {
  margin-bottom: 4rem;
  scroll-margin-top: 150px;
}

.main-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--color-border);
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.info-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;

  p {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin: 0;
  }
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.link-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
}

.link-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.link-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.link-url {
  font-size: 0.875rem;
  color: var(--color-accent);
  font-family: 'Courier New', monospace;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  p {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tech-category {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    color: var(--color-accent);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5rem 0;
    color: var(--color-text-secondary);
    line-height: 1.6;

    strong {
      color: var(--color-text-primary);
    }
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;

  pre {
    margin: 0;

    code {
      font-family: 'Courier New', Consolas, monospace;
      font-size: 0.875rem;
      line-height: 1.6;
      color: #d4d4d4;
      white-space: pre;
    }
  }
}

.timeline {
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-border);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 0 0 4px var(--color-bg-secondary);
}

.timeline-content {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  li {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.insights-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.insight-item {
  display: flex;
  gap: 1.5rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.insight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.insight-content {
  flex: 1;

  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
}

.challenge-desc {
  color: #d73a49;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.solution-desc {
  color: #22863a;
  font-weight: 600;
  margin-bottom: 1rem;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.future-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9375rem;
    line-height: 1.6;
    margin: 0;
  }
}

.future-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .mataju-page {
    padding-top: 60px;
  }

  .sticky-nav {
    top: 50px;
  }

  .page-content {
    padding: 1rem;
  }

  .timeline {
    padding-left: 2rem;

    &::before {
      left: 0.5rem;
    }
  }

  .timeline-marker {
    left: -1.75rem;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
  }
}
</style>
