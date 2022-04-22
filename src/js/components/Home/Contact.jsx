import CardInfo from '../CardInfo'
import Socials from '../Socials'
import Frame from '../Frame'

const Contact = () => {
    return <section id="contact" data-scroll-section="">
        <div className="container">
            <div>
                <div className="title">
                    <h2><span className="strong">Contact</span> me</h2>
                    <h3>Leave me a message</h3>
                </div>
                <div className="content">
                    <form action="https://formspree.io/f/mqkgrlwd" method="POST">
                        <div className="field">
                            <label htmlFor="name">Your name :</label>
                            <input id="name" type="text" name="name" placeholder="Jane Doe" required />
                        </div>
                        <div className="field">
                            <label htmlFor="mail">Your e-mail :</label>
                            <input id="mail" type="email" name="mail" placeholder="jane.doe@example.com" required />
                        </div>

                        <div className="field">
                            <label htmlFor="message">Your message :</label>
                            <textarea name="message" id="message" placeholder="Hello, ..." required />
                        </div>

                        <button className="btn primary" type="submit">Send</button>
                    </form>
                    <p className="small">Think to indicate your phone number or your e-mail to be contacted back.</p>
                </div>
            </div>
            <div>
                <div className="title">
                    <h3>You can also find me here</h3>
                </div>
                <div className="content">
                    <CardInfo>
                        {
                            [
                                {
                                    label: 'Address',
                                    value: '5 rue du Rhône\n' +
                                        '74100 Annemasse, France'
                                },
                                {
                                    label: 'Phone',
                                    value: <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
                                },
                                {
                                    label: 'E-mail',
                                    value: <a className="link" href="mailto:amina.seraoui@outlook.fr">amina.seraoui@outlook.fr</a>
                                },
                                {
                                    label: 'Socials',
                                    value: <Socials/>
                                }
                            ]
                        }
                    </CardInfo>
                    <Frame img="contact.jpg" />
                </div>
            </div>
        </div>
    </section>
}

export default Contact