import { watch, onMounted } from 'vue'

/**
 * localStorage에서 categories를 로드/저장하는 composable
 * @param {Ref} categories - categories ref
 * @param {string} key - localStorage key
 * @param {Array} defaultValue - 기본값
 */
export function useLocalStorage(categories, key, defaultValue = []) {
  // localStorage에서 데이터 로드
  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        const parsed = JSON.parse(stored)
        categories.value = parsed
        console.log(`Loaded ${key} from localStorage:`, parsed.length, 'items')
      } else {
        // 저장된 데이터가 없으면 기본값 사용
        categories.value = defaultValue
      }
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error)
      categories.value = defaultValue
    }
  }

  // localStorage에 데이터 저장
  const saveToStorage = () => {
    try {
      localStorage.setItem(key, JSON.stringify(categories.value))
      console.log(`Saved ${key} to localStorage:`, categories.value.length, 'items')
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error)
    }
  }

  // 컴포넌트 마운트 시 로드
  onMounted(() => {
    loadFromStorage()
  })

  // categories 변경 시 자동 저장
  watch(categories, () => {
    saveToStorage()
  }, { deep: true })

  return {
    loadFromStorage,
    saveToStorage
  }
}
