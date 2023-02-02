import admin from 'firebase-admin'

!admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert({
        'type': process.env.FIREBASE_TYPE,
        'project_id':process.env.FIREBASE_PROJECT_ID,
        'private_key_id': process.env.FIREBASE_PRIVATE_KEY_ID,
        'private_key': process.env.FIREBASE_PRIVATE_KEY,
        'client_email': process.env.FIREBASE_CLIENT_EMAIL,
        'client_id': process.env.FIREBASE_CLIENT_ID,
        'auth_uri': process.env.FIREBASE_AUTH_URI,
        'token_uri': process.env.FIREBASE_TOKEN_URI,
        'auth_provider_x509_cert_url': process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        'client_x509_cert_url': process.env.FIREBASE_CLIENT_X509_CERT_URL
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
}) : admin.app

/*
// EXPORT

const data = require('../../../db/backup.json')

// data.works.forEach(async work => {
//     await setDoc(doc(firestore, 'works', work.slug), work)
// })
//
// data.tabs.forEach(async tab => {
//     await setDoc(doc(firestore, 'tabs', tab), {'name': tab})
// })
*/