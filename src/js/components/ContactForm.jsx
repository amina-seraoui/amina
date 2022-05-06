import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        const data = {name, mail, msg, timestamp: new Date().getTime().toString()}
        fetch('/api/msg', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                // create success alert
            })
            .catch(err => {
                console.error(err)
                // create error alert
            })

        setName('')
        setMail('')
        setMsg('')
    }

    return <form method="POST" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="name">Your name :</label>
            <input id="name" type="text" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="field">
            <label htmlFor="mail">Your e-mail :</label>
            <input id="mail" type="email" placeholder="jane.doe@example.com" value={mail} onChange={e => setMail(e.target.value)} required />
        </div>

        <div className="field">
            <label htmlFor="message">Your message :</label>
            <textarea id="message" placeholder="Hello, ..." value={msg} onChange={e => setMsg(e.target.value)} required />
        </div>

        <button className="btn primary" type="submit">Send</button>
    </form>
}

export default ContactForm