import Gallery from './Gallery'
import {FormattedMessage} from 'react-intl'

const Works = ({tabs, works}) => {
    return <section id="works">
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="works.title"
                        defaultMessage="Some <s>works</s>"
                        values={{ s: c => <span className="strong">{c}</span> }}
                    />
                </h2>
                <h3><FormattedMessage id="works.subtitle" defaultMessage="that I'm proud of"/></h3>
            </div>
            <Gallery className="content" tabs={tabs} images={works}/>
        </div>
    </section>
}

export default Works
