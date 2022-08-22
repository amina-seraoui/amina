import './firebase-app'
import {getFirestore} from 'firebase-admin/firestore'
const firestore = getFirestore()

export const getAll = async (table) => {
    const q = firestore.collection(table)
    const snapshot = await q.get()
    return snapshot.docs.map(doc => doc.data())
}

export const getBy = async (table, field, value) => {
    const q = firestore.collection(table).where(field, '==', value)
    const snapshot = await q.get()
    return snapshot.docs.map(doc => doc.data())[0]
}

export const withLimit = async (table, l) => {
    const q = firestore.collection(table).limit(l)
    const snapshot = await q.get()
    return snapshot.docs.map(doc => doc.data())
}

export const create = async (table, data) => {
    return await firestore.collection(table).add(data)
}

export const count = async (table) => {
    const cols = firestore.collection(firestore, table)
    const snapshot = await firestore.getAll(cols)
    return snapshot.size
}

export const inWithLimit =  async (table, field, value, l) => {
    const q = firestore.collection(table).where(field, 'array-contains', value).limit(l)
    const snapshot = await q.get()
    return snapshot.docs.map(doc => doc.data())
}
