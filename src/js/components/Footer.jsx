import Image from 'next/image'
import Link from 'next/link'
import {FormattedMessage} from 'react-intl'

const Footer = ({next, prev}) => {
    return <footer>
        <div className="container">
            {
                (next && prev) ?
                    <div className="pagination">
                        <a href={prev.slug} className="btn tertiary"><FormattedMessage id="btn.prev" defaultMessage="Prev"/></a>
                        <a href={next.slug} className="btn tertiary"><FormattedMessage id="btn.next" defaultMessage="Next"/></a>
                    </div> : null
            }

            <div className="title">
                <h2>
                    <FormattedMessage
                        id="footer.title"
                        values={{ s: c => <span className="strong">{c}</span> }}
                        defaultMessage="Thank <s>you</s>"
                    />
                </h2>
                <h3><FormattedMessage id="footer.subtitle" defaultMessage="Thank you for your visit"/></h3>
            </div>
            <div className="content">
                <div className="jetbrains">
                    <p>
                        <FormattedMessage
                            id="footer.jetbrains"
                            defaultMessage="Special thanks to <a>Jetbrains</a> for their very useful Open Source license on their awesome products."
                            values={{ a: c => <a href="https://jb.gg/OpenSource" className="link" target="_blank" rel="noreferrer">{c}</a>}}
                        />
                    </p>
                    <a href="https://jb.gg/OpenSource" target="_blank" rel="noreferrer">
                        <Image src="/assets/img/jetbrains.svg" alt="Jetbrains logo" width={64} height={64}/>
                    </a>
                </div>

                <Link href="/">
                    <a>
                        <Image src="/assets/img/logo.svg" alt="Logo Tasmim Concept" width={64} height={64}/>
                    </a>
                </Link>

                <p className="small">
                    Copyright © 2021 - Amina Seraoui. <FormattedMessage id="footer.rightsreserved" defaultMessage="All Rights Reserved."/> Avec la participation de Lo Yasso & Warrengers.

                </p>
            </div>
        </div>
    </footer>
}

export default Footer
