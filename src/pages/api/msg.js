import '../../js/firebase/firebase-app'
import { getDatabase } from 'firebase-admin/database'
const database = getDatabase()

export default function handler(req, res) {
    console.log(req.body)
    if (req.method === 'POST') {
        database.ref('messages/' + req.body.timestamp).set({...req.body, read: false})
            .then(r => {
                res.status(200).json({'success': true})
            })
            .catch(err => console.log(err))
    } else res.status(403).send('bad request')
}
