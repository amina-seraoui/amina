import Gallery from './Gallery'
import {FormattedMessage} from 'react-intl'

const Works = ({setIsOpen, tabs, works, setIndex, setGallery, setNames, setLinks}) => {
    return <section id="works" data-scroll-section="">
        <div className="container">
            <div className="title">
                <h2>
                    <FormattedMessage
                        id="works.title"
                        defaultMessage="Some <s>works</s>"
                        values={{ s: c => <span className="strong">{c}</span> }}
                    />
                </h2>
                <h3><FormattedMessage id="works.subtitle" defaultMessage="Some projects I'm proud of"/></h3>
            </div>
            <Gallery className="content" tabs={tabs} images={works} setIsOpen={setIsOpen} setIndex={setIndex} setGallery={setGallery} setNames={setNames} setLinks={setLinks}/>
        </div>
    </section>
}

export default Works
