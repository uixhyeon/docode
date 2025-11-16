<template>
  <div class="learning-records-page">
    <div class="page-header">
      <h1 class="page-title">📝 학습기록</h1>
      <p class="page-description">학원 수업 내용을 날짜별로 정리하고 관리합니다</p>
    </div>

    <div class="content-layout">
      <!-- 달력 섹션 -->
      <div class="calendar-section">
        <div class="calendar-header">
          <button class="nav-btn" @click="previousMonth">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h2 class="current-month">{{ currentYear }}년 {{ currentMonth }}월</h2>
          <button class="nav-btn" @click="nextMonth">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div class="calendar">
          <div class="weekdays">
            <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
          </div>
          <div class="days">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              :class="[
                'day',
                { 'empty': !day },
                { 'today': isToday(day) },
                { 'selected': isSelectedWeek(day) },
                { 'has-record': hasRecord(day) }
              ]"
              @click="day && selectDate(day)"
            >
              <span v-if="day">{{ day }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 주간 학습기록 섹션 -->
      <div class="records-section">
        <div v-if="selectedWeek" class="week-info">
          <h3 class="week-title">
            {{ selectedWeek.start.month }}월 {{ selectedWeek.start.day }}일 -
            {{ selectedWeek.end.month }}월 {{ selectedWeek.end.day }}일 주간 학습기록
          </h3>
        </div>

        <div v-if="selectedWeek" class="daily-records">
          <div
            v-for="(dayRecord, index) in weekRecords"
            :key="index"
            class="day-record"
          >
            <div class="day-header">
              <h4 class="day-title">
                {{ dayRecord.date.month }}월 {{ dayRecord.date.day }}일 ({{ weekdays[dayRecord.date.weekday] }})
              </h4>
              <button
                v-if="!dayRecord.isEditing"
                class="edit-btn"
                @click="startEdit(index)"
              >
                편집
              </button>
              <div v-else class="edit-actions">
                <button class="save-btn" @click="saveEdit(index)">저장</button>
                <button class="cancel-btn" @click="cancelEdit(index)">취소</button>
              </div>
            </div>

            <div v-if="!dayRecord.isEditing" class="day-content">
              <div v-if="dayRecord.title || dayRecord.content" class="record-view">
                <h5 v-if="dayRecord.title" class="record-title">{{ dayRecord.title }}</h5>
                <div v-if="dayRecord.content" class="record-content markdown-body" v-html="renderMarkdown(dayRecord.content)"></div>
              </div>
              <div v-else class="empty-state">
                <p>기록이 없습니다. 편집 버튼을 눌러 내용을 추가하세요.</p>
              </div>
            </div>

            <div v-else class="day-edit">
              <input
                v-model="dayRecord.editTitle"
                type="text"
                class="title-input"
                placeholder="제목을 입력하세요"
              />
              <textarea
                v-model="dayRecord.editContent"
                class="content-input"
                placeholder="마크다운 형식으로 내용을 입력하세요&#10;&#10;예시:&#10;# 제목&#10;## 소제목&#10;- 목록&#10;**굵게**&#10;*기울임*&#10;```&#10;코드 블록&#10;```"
                rows="10"
              ></textarea>
              <div class="preview">
                <h6 class="preview-title">미리보기</h6>
                <div class="preview-content markdown-body" v-html="renderMarkdown(dayRecord.editContent)"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="no-selection">
          <p>날짜를 선택하면 해당 주의 학습기록을 확인할 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { marked } from 'marked'
import { auth } from '@/firebase/config'
import {
  getLearningRecordsByMonth,
  saveLearningRecord
} from '@/firebase/firestore'

// 현재 날짜
const now = new Date()
const currentYear = ref(now.getFullYear())
const currentMonth = ref(now.getMonth() + 1)
const selectedDate = ref(null)
const selectedWeek = ref(null)

// 요일
const weekdays = ['일', '월', '화', '수', '목', '금', '토']

// 저장된 기록들 (파이어베이스)
const records = ref({})

// 주간 기록
const weekRecords = ref([])

// 로딩 상태
const loading = ref(false)

// 달력 날짜 계산
const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value
  const firstDay = new Date(year, month - 1, 1).getDay()
  const lastDate = new Date(year, month, 0).getDate()

  const days = []

  // 빈 칸 추가
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // 날짜 추가
  for (let i = 1; i <= lastDate; i++) {
    days.push(i)
  }

  return days
})

// 오늘인지 확인
const isToday = (day) => {
  if (!day) return false
  const today = new Date()
  return (
    currentYear.value === today.getFullYear() &&
    currentMonth.value === today.getMonth() + 1 &&
    day === today.getDate()
  )
}

// 선택된 주에 속하는지 확인
const isSelectedWeek = (day) => {
  if (!day || !selectedWeek.value) return false

  const date = new Date(currentYear.value, currentMonth.value - 1, day)
  const startDate = new Date(
    selectedWeek.value.start.year,
    selectedWeek.value.start.month - 1,
    selectedWeek.value.start.day
  )
  const endDate = new Date(
    selectedWeek.value.end.year,
    selectedWeek.value.end.month - 1,
    selectedWeek.value.end.day
  )

  return date >= startDate && date <= endDate
}

// 기록이 있는지 확인
const hasRecord = (day) => {
  if (!day) return false
  const key = getDateKey(currentYear.value, currentMonth.value, day)
  const record = records.value[key]
  return record && (record.title || record.content)
}

// 날짜 키 생성
const getDateKey = (year, month, day) => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

// 주의 시작일과 종료일 계산
const getWeekRange = (year, month, day) => {
  const date = new Date(year, month - 1, day)
  const dayOfWeek = date.getDay()

  // 일요일(0)을 주의 시작으로
  const startDate = new Date(date)
  startDate.setDate(date.getDate() - dayOfWeek)

  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 6)

  return {
    start: {
      year: startDate.getFullYear(),
      month: startDate.getMonth() + 1,
      day: startDate.getDate(),
      weekday: startDate.getDay()
    },
    end: {
      year: endDate.getFullYear(),
      month: endDate.getMonth() + 1,
      day: endDate.getDate(),
      weekday: endDate.getDay()
    }
  }
}

// 날짜 선택
const selectDate = (day) => {
  if (!day) return

  selectedDate.value = { year: currentYear.value, month: currentMonth.value, day }
  selectedWeek.value = getWeekRange(currentYear.value, currentMonth.value, day)

  // 주간 기록 생성
  const weekRange = selectedWeek.value
  const startDate = new Date(weekRange.start.year, weekRange.start.month - 1, weekRange.start.day)

  weekRecords.value = []
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const day = currentDate.getDate()
    const weekday = currentDate.getDay()

    const key = getDateKey(year, month, day)
    const record = records.value[key] || { title: '', content: '' }

    weekRecords.value.push({
      date: { year, month, day, weekday },
      title: record.title || '',
      content: record.content || '',
      editTitle: record.title || '',
      editContent: record.content || '',
      isEditing: false
    })
  }
}

// 편집 시작
const startEdit = (index) => {
  weekRecords.value[index].isEditing = true
  weekRecords.value[index].editTitle = weekRecords.value[index].title
  weekRecords.value[index].editContent = weekRecords.value[index].content
}

// 편집 저장
const saveEdit = async (index) => {
  const record = weekRecords.value[index]
  const key = getDateKey(record.date.year, record.date.month, record.date.day)

  record.title = record.editTitle
  record.content = record.editContent
  record.isEditing = false

  // 파이어베이스에 저장
  const user = auth.currentUser
  if (!user) {
    console.error('No user logged in')
    return
  }

  records.value[key] = {
    title: record.title,
    content: record.content
  }

  try {
    await saveLearningRecord(user.uid, key, {
      title: record.title,
      content: record.content
    })
    console.log('Learning record saved successfully')
  } catch (error) {
    console.error('Failed to save learning record:', error)
  }
}

// 편집 취소
const cancelEdit = (index) => {
  weekRecords.value[index].isEditing = false
  weekRecords.value[index].editTitle = weekRecords.value[index].title
  weekRecords.value[index].editContent = weekRecords.value[index].content
}

// 이전 달
const previousMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

// 다음 달
const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

// 마크다운 렌더링
const renderMarkdown = (content) => {
  if (!content) return ''
  return marked(content)
}

// 파이어베이스에서 월간 데이터 로드
const loadMonthRecords = async () => {
  const user = auth.currentUser
  if (!user) {
    console.warn('No user logged in')
    return
  }

  loading.value = true

  try {
    const monthRecords = await getLearningRecordsByMonth(
      user.uid,
      currentYear.value,
      currentMonth.value
    )
    records.value = monthRecords
    console.log('Learning records loaded:', monthRecords)
  } catch (error) {
    console.error('Failed to load learning records:', error)
  } finally {
    loading.value = false
  }
}

// 월이 변경될 때 데이터 다시 로드
watch([currentYear, currentMonth], () => {
  loadMonthRecords()
})

// 컴포넌트 마운트 시
onMounted(() => {
  loadMonthRecords()
})
</script>

<style lang="scss" scoped>
.learning-records-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #087ea4 0%, #0c5f7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.page-description {
  font-size: 1.125rem;
  color: #6b7280;
}

.content-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// 달력 섹션
.calendar-section {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 80px;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.current-month {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

.nav-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }
}

.calendar {
  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }

  .weekday {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: #6b7280;
    padding: 0.5rem;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
  }

  .day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #1f2937;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;

    &.empty {
      cursor: default;
    }

    &:not(.empty):hover {
      background: #f3f4f6;
    }

    &.today {
      background: #087ea4;
      color: white;
      font-weight: 700;
    }

    &.selected {
      background: #e0f2f1;
      color: #087ea4;
      font-weight: 700;
    }

    &.has-record::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 4px;
      height: 4px;
      background: #087ea4;
      border-radius: 50%;
    }

    &.today.has-record::after {
      background: white;
    }
  }
}

// 기록 섹션
.records-section {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  min-height: 600px;
}

.week-info {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.week-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.daily-records {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.day-record {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: #087ea4;
  }
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.day-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
}

.edit-btn, .save-btn, .cancel-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn {
  background: #f3f4f6;
  color: #1f2937;

  &:hover {
    background: #e5e7eb;
  }
}

.edit-actions {
  display: flex;
  gap: 0.5rem;
}

.save-btn {
  background: #087ea4;
  color: white;

  &:hover {
    background: #0c5f7a;
  }
}

.cancel-btn {
  background: #f3f4f6;
  color: #1f2937;

  &:hover {
    background: #e5e7eb;
  }
}

.day-content {
  .record-view {
    .record-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .record-content {
      color: #374151;
      line-height: 1.7;
    }
  }

  .empty-state {
    color: #9ca3af;
    font-style: italic;
  }
}

.day-edit {
  .title-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;

    &:focus {
      outline: none;
      border-color: #087ea4;
    }
  }

  .content-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    line-height: 1.6;
    resize: vertical;
    margin-bottom: 1rem;

    &:focus {
      outline: none;
      border-color: #087ea4;
    }
  }

  .preview {
    .preview-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 0.5rem;
    }

    .preview-content {
      padding: 1rem;
      background: #f9fafb;
      border-radius: 8px;
      min-height: 100px;
    }
  }
}

.no-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #9ca3af;
  font-size: 1.125rem;
}

// 마크다운 스타일
.markdown-body {
  :deep(h1) {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  :deep(h2) {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.875rem;
    color: #1f2937;
  }

  :deep(h3) {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }

  :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  :deep(ul), :deep(ol) {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  :deep(li) {
    margin-bottom: 0.5rem;
  }

  :deep(strong) {
    font-weight: 700;
    color: #1f2937;
  }

  :deep(em) {
    font-style: italic;
  }

  :deep(code) {
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-size: 0.875em;
  }

  :deep(pre) {
    background: #1f2937;
    color: #f3f4f6;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1rem;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  :deep(blockquote) {
    border-left: 4px solid #087ea4;
    padding-left: 1rem;
    color: #6b7280;
    margin-bottom: 1rem;
  }
}
</style>
