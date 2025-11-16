import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import { db } from './config'

// 사용자의 모든 아티클 가져오기
export const getUserArticles = async (userId, subcategory, page) => {
  try {
    const articlesRef = collection(db, `users/${userId}/articles`)
    const q = query(
      articlesRef,
      where('subcategory', '==', subcategory),
      where('page', '==', page),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting articles:', error)
    return []
  }
}

// 특정 아티클 가져오기
export const getArticle = async (userId, articleId) => {
  try {
    const articleRef = doc(db, `users/${userId}/articles/${articleId}`)
    const articleDoc = await getDoc(articleRef)

    if (articleDoc.exists()) {
      return { id: articleDoc.id, ...articleDoc.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting article:', error)
    return null
  }
}

// 아티클 저장 (생성)
export const saveArticle = async (userId, articleData) => {
  try {
    const articleId = articleData.id || Date.now().toString()
    const articleRef = doc(db, `users/${userId}/articles/${articleId}`)

    await setDoc(articleRef, {
      ...articleData,
      id: articleId,
      createdAt: articleData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })

    return articleId
  } catch (error) {
    console.error('Error saving article:', error)
    throw error
  }
}

// 아티클 업데이트
export const updateArticle = async (userId, articleId, articleData) => {
  try {
    const articleRef = doc(db, `users/${userId}/articles/${articleId}`)

    await updateDoc(articleRef, {
      ...articleData,
      updatedAt: new Date().toISOString()
    })

    return true
  } catch (error) {
    console.error('Error updating article:', error)
    throw error
  }
}

// 아티클 삭제
export const deleteArticle = async (userId, articleId) => {
  try {
    const articleRef = doc(db, `users/${userId}/articles/${articleId}`)
    await deleteDoc(articleRef)
    return true
  } catch (error) {
    console.error('Error deleting article:', error)
    throw error
  }
}

// 사용자의 모든 아티클 가져오기 (전체)
export const getAllUserArticles = async (userId) => {
  try {
    const articlesRef = collection(db, `users/${userId}/articles`)
    const q = query(articlesRef, orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting all articles:', error)
    return []
  }
}

// 카테고리 데이터 가져오기
export const getCategories = async (userId, pageId) => {
  try {
    const categoriesRef = doc(db, `users/${userId}/page-data/${pageId}`)
    const categoriesDoc = await getDoc(categoriesRef)

    if (categoriesDoc.exists()) {
      return categoriesDoc.data().categories || []
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting categories:', error)
    return null
  }
}

// 카테고리 데이터 저장
export const saveCategories = async (userId, pageId, categories) => {
  try {
    const categoriesRef = doc(db, `users/${userId}/page-data/${pageId}`)

    await setDoc(categoriesRef, {
      categories,
      updatedAt: new Date().toISOString()
    })

    return true
  } catch (error) {
    console.error('Error saving categories:', error)
    throw error
  }
}

// ============ Production Sites CRUD ============

// 모든 제작 사이트 가져오기
export const getProductionSites = async (userId) => {
  try {
    const sitesRef = collection(db, `users/${userId}/production-sites`)
    const q = query(sitesRef, orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting production sites:', error)
    return []
  }
}

// 특정 제작 사이트 가져오기
export const getProductionSite = async (userId, siteId) => {
  try {
    const siteRef = doc(db, `users/${userId}/production-sites/${siteId}`)
    const siteDoc = await getDoc(siteRef)

    if (siteDoc.exists()) {
      return { id: siteDoc.id, ...siteDoc.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting production site:', error)
    return null
  }
}

// 제작 사이트 저장 (생성)
export const saveProductionSite = async (userId, siteData) => {
  try {
    const siteId = siteData.id || `site-${Date.now()}`
    const siteRef = doc(db, `users/${userId}/production-sites/${siteId}`)

    await setDoc(siteRef, {
      ...siteData,
      id: siteId,
      createdAt: siteData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })

    return siteId
  } catch (error) {
    console.error('Error saving production site:', error)
    throw error
  }
}

// 제작 사이트 업데이트
export const updateProductionSite = async (userId, siteId, siteData) => {
  try {
    const siteRef = doc(db, `users/${userId}/production-sites/${siteId}`)

    await updateDoc(siteRef, {
      ...siteData,
      updatedAt: new Date().toISOString()
    })

    return true
  } catch (error) {
    console.error('Error updating production site:', error)
    throw error
  }
}

// 제작 사이트 삭제
export const deleteProductionSite = async (userId, siteId) => {
  try {
    const siteRef = doc(db, `users/${userId}/production-sites/${siteId}`)
    await deleteDoc(siteRef)
    return true
  } catch (error) {
    console.error('Error deleting production site:', error)
    throw error
  }
}
