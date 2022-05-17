import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore/lite'

const credentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const app = !getApps.length ? initializeApp(credentials) : getApp()
const firestore = getFirestore(app)

export default firestore


// EXPORT

const data = require('../../../db/backup.json')
console.log(data)
// data.works.forEach(async work => {
//     await setDoc(doc(firestore, 'works', work.slug), work)
// })
//
// data.tabs.forEach(async tab => {
//     await setDoc(doc(firestore, 'tabs', tab), tab)
// })
