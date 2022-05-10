import { create } from '../../js/model'
const nodemailer = require('nodemailer')

export default function handler(req, res) {
    if (req.method === 'POST') {
        create('messages', req.body)
            .then(doc => {
                sendMail({...req.body})
                res.status(200).json({success: true})
            })
            .catch(err => {
                console.log(err)
                res.status(500)
            })
    } else res.status(403).send('bad request')
}

const sendMail = ({name, msg}) => {
    const config = {
        service: 'gmail',
        auth: {
            user: process.env.MAIL_AUTH_USER,
            pass: process.env.MAIL_AUTH_PASS
        }
    }

    const mail = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_FROM,
        subject: 'Nuovo Messaggio di ' + name,
        text: 'Buongiorno | Buondi, hai ricevuto un nuovo messaggio : ' + msg
    }

    const transporter = nodemailer.createTransport(config)

    transporter.sendMail(mail, (err, info) => {
        if (err) throw err
        console.log('Email sent !')
        console.log(info)
    })
}