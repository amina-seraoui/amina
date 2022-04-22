import {firestore, collection, getDocs} from '../firebase/client'

const useFirebase = async (table) => {
    async function getItems (db) {
        const cols = collection(db, table)
        const snapshot = await getDocs(cols)
        return snapshot.docs.map(doc => doc.data())
    }

    await getItems(firestore)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

export default useFirebase