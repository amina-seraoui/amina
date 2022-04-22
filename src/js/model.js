import firestore from './firebase/client'
import {query, where, collection, getDocs} from 'firebase/firestore/lite'

export const getAll = async (table) => {
    async function getItems (db) {
        const cols = collection(db, table)
        const snapshot = await getDocs(cols)
        return snapshot.docs.map(doc => doc.data())
    }

    return await getItems(firestore)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

export const getBy = async(table, field, value) => {
    async function getItem(db) {
        const q = query(collection(db, table), where(field, '==', value))
        const snapshot = await getDocs(q)
        return snapshot.docs.map(doc => doc.data())
    }

    return await getItem(firestore)
        .then(res => {
            console.log('res', res)
            return res[0]
        })
        .catch(err => {
            console.log(err)
        })
}