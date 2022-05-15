import Frame from '../Frame'
import CardInfo from '../CardInfo'
import { FormattedMessage } from 'react-intl'

const About = ({ age }) => {
    return <section id="about" data-scroll-section="">
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="about.title"
                        values={{ s: a => <span className="strong">{a}</span> }}
                        defaultMessage="<s>About</s> me"
                    />
                </h2>
                <h3><FormattedMessage id="about.subtitle" defaultMessage="In few words"/></h3>
            </div>
            <div className="content">
                <Frame img="about.jpg" />
                <CardInfo>
                    {[
                        {
                            label: <FormattedMessage id="first.name" defaultMessage="First name" />,
                            value: 'Amina'
                        },
                        {
                            label: <FormattedMessage id="last.name" defaultMessage="Last name" />,
                            value: 'Seraoui'
                        },
                        {
                            label: <FormattedMessage id="available" defaultMessage="Available" />,
                            value: <FormattedMessage id="remote" defaultMessage="Remote only" />
                        },
                        {
                            label: <FormattedMessage id="languages" defaultMessage="Languages" />,
                            value: <FormattedMessage id="languages.list" defaultMessage="French, English, Arabic" />,
                        },
                        {
                            label: <FormattedMessage id="age" defaultMessage="Age" />,
                            value: age
                        },
                        {
                            label: <FormattedMessage id="phone" defaultMessage="Phone" />,
                            value: <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
                        },
                        {
                            label: <FormattedMessage id="mail" defaultMessage="Mail" />,
                            value: <a className="link" href="mailto:amina.seraoui@outlook.fr">amina.seraoui@outlook.fr</a>
                        },
                        {
                            label: <FormattedMessage id="github" defaultMessage="Github" />,
                            value: <a className="link" href="github.com/amina-seraoui">github.com/amina-seraoui</a>
                        }
                    ]}
                </CardInfo>
            </div>
            <div className="buttons" data-scroll="">
                <a data-scroll="" data-scroll-speed=".15" data-scroll-direction="vertical"
                   href="#contact" className="btn primary">
                    <FormattedMessage id="contact.me" defaultMessage="Contact me" />
                </a>
                <a data-scroll="" data-scroll-speed="-.15" data-scroll-direction="vertical"
                   href="#works" className="btn secondary">
                    <FormattedMessage id="check.portfolio" defaultMessage="Check my portfolio" />
                </a>
            </div>
        </div>
    </section>
}

export default About