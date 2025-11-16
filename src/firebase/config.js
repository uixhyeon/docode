import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGHtx7sP5ROtxFbPrtAyX2In_jIERlRpQ",
  authDomain: "code-archive-f7f9d.firebaseapp.com",
  projectId: "code-archive-f7f9d",
  storageBucket: "code-archive-f7f9d.firebasestorage.app",
  messagingSenderId: "722103492468",
  appId: "1:722103492468:web:860018de03f4036d179621",
  measurementId: "G-WRCBP6275S"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export default app
