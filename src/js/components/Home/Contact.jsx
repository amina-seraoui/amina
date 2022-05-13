import CardInfo from '../CardInfo'
import Socials from '../Socials'
import Frame from '../Frame'
import ContactForm from '../ContactForm'
import {FormattedMessage} from 'react-intl'

const Contact = ({ createAlert }) => {
    return <section id="contact" data-scroll-section="">
        <div className="container">
            <div>
                <div className="title">
                    <h2>
                        <FormattedMessage
                            id="contact.title"
                            values={{ s: c => <span className="strong">{c}</span> }}
                            defaultMessage="<s>Contact</s> me"
                        />
                    </h2>
                    <h3><FormattedMessage id="contact.subtitle" defaultMessage="Leave me a message"/></h3>
                </div>
                <div className="content">
                    <ContactForm createAlert={createAlert} />
                    <p className="small">
                        <FormattedMessage id="contact.indication" defaultMessage="Think to indicate your phone number or your e-mail to be contacted back."/>
                    </p>
                </div>
            </div>
            <div>
                <div className="title">
                    <h3>
                        <FormattedMessage id="contact.find.me" defaultMessage="You can also find me here"/>
                    </h3>
                </div>
                <div className="content">
                    <CardInfo>
                        {
                            [
                                {
                                    label: <FormattedMessage id="phone" defaultMessage="Phone" />,
                                    value: <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
                                },
                                {
                                    label: <FormattedMessage id="mail" defaultMessage="Mail" />,
                                    value: <a className="link" href="mailto:amina.seraoui@outlook.fr">amina.seraoui@outlook.fr</a>
                                },
                                {
                                    label: <FormattedMessage id="socials" defaultMessage="Socials" />,
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