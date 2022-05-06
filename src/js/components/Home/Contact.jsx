import CardInfo from '../CardInfo'
import Socials from '../Socials'
import Frame from '../Frame'
import ContactForm from '../ContactForm'

const Contact = () => {
    return <section id="contact" data-scroll-section="">
        <div className="container">
            <div>
                <div className="title">
                    <h2><span className="strong">Contact</span> me</h2>
                    <h3>Leave me a message</h3>
                </div>
                <div className="content">
                    <ContactForm />
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