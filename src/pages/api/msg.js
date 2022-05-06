import { create } from '../../js/model'

export default function handler(req, res) {
    create('messages', req.body)
        .then(doc => {
            console.log(doc)
            res.status(200).json({success: true})
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
}