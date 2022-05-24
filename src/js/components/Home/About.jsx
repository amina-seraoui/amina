import Frame from '../Frame'
import CardInfo from '../CardInfo'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const About = ({ age }) => {
    return <section id="about">
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="about.title"
                        values={{ s: c => <span className="strong">{c}</span> }}
                        defaultMessage="<s>About</s> me"
                    />
                </h2>
                <h3><FormattedMessage id="about.subtitle" defaultMessage="In few words"/></h3>
            </div>
            <div className="content">
                <Frame img="/assets/img/about.jpg" />
                <CardInfo>
                    {[
                        {
                            label: <FormattedMessage id="label.description" defaultMessage="Description" />,
                            value: <FormattedMessage
                                id="value.description"
                                defaultMessage="Passionate about computer science, I'm on web development domain since 2017.
                                 You can find <a>my works</a> below."
                                values={{ a: c => <Link href="#works"><a className="link">{c}</a></Link> }}
                            />,
                            style: {width: '100%'}
                        },
                        {
                            label: <FormattedMessage id="label.first.name" defaultMessage="First name" />,
                            value: 'Amina'
                        },
                        {
                            label: <FormattedMessage id="label.last.name" defaultMessage="Last name" />,
                            value: 'Seraoui'
                        },
                        {
                            label: <FormattedMessage id="label.available" defaultMessage="Available" />,
                            value: <FormattedMessage id="remote" defaultMessage="Remote only" />
                        },
                        {
                            label: <FormattedMessage id="label.languages" defaultMessage="Languages" />,
                            value: <FormattedMessage id="value.languages" defaultMessage="French, English, Arabic" />,
                        },
                        {
                            label: <FormattedMessage id="label.age" defaultMessage="Age" />,
                            value: age
                        },
                        {
                            label: <FormattedMessage id="label.mail" defaultMessage="Mail" />,
                            value: <a className="link" href="mailto:tasmim-concept@gmail.com">tasmim-concept@gmail.com</a>
                        },
                        {
                            label: <FormattedMessage id="label.github" defaultMessage="Github" />,
                            value: <a className="link" href="github.com/amina-seraoui">github.com/amina-seraoui</a>,
                            style: {width: '100%'}
                        }
                    ]}
                </CardInfo>
            </div>
            <div className="buttons">
                <a href="#contact" className="btn primary">
                    <FormattedMessage id="btn.contact" defaultMessage="Contact me" />
                </a>
                <a href="#works" className="btn secondary">
                    <FormattedMessage id="btn.works" defaultMessage="Check my portfolio" />
                </a>
            </div>
        </div>
    </section>
}

export default About
