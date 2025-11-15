import { ref, onMounted } from 'vue'
import { auth } from '@/firebase/config'
import { getUserArticles } from '@/firebase/firestore'

export function useArticles(subcategory, page) {
  const articles = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadArticles = async () => {
    const user = auth.currentUser
    if (!user) {
      console.warn('No user logged in, articles will not be loaded')
      return
    }

    loading.value = true
    error.value = null

    try {
      const fetchedArticles = await getUserArticles(user.uid, subcategory, page)
      articles.value = fetchedArticles
    } catch (err) {
      console.error('Failed to load articles:', err)
      error.value = err
      articles.value = []
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    loadArticles()
  })

  const getArticles = (topicId) => {
    return articles.value.filter(article => article.topicId === topicId)
  }

  return {
    articles,
    loading,
    error,
    loadArticles,
    getArticles
  }
}
