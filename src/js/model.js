import firestore from './firebase/client'
import {query, where, collection, getDocs, addDoc, setDoc, doc} from 'firebase/firestore/lite'

export const getAll = async (table) => {
    const cols = collection(firestore, table)
    const snapshot = await getDocs(cols)
    return snapshot.docs.map(doc => doc.data())
}

export const getBy = async (table, field, value) => {
    const q = query(collection(firestore, table), where(field, '==', value))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => doc.data())[0]
}

export const create = async (table, data) => {
    return await addDoc(collection(firestore, table), data)
}