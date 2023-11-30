// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCROtK4RCNQMnWKa_5W6JNpY_c34Rr-ZBE',
    authDomain: 'couponapp-c6b84.firebaseapp.com',
    databaseURL:
        'https://couponapp-c6b84-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'couponapp-c6b84',
    storageBucket: 'couponapp-c6b84.appspot.com',
    messagingSenderId: '623833642338',
    appId: '1:623833642338:web:1fe638c6effb36b743283b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
