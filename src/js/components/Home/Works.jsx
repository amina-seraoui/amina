import Gallery from './Gallery'
import {useState, useEffect} from 'react'
import {FormattedMessage} from 'react-intl'

const Works = () => {
    const [tabs, setTabs] = useState(['all'])
    const [works, setWorks] = useState([])
    const limit = 6

    useEffect(() => {
        fetch('/api/works?limit=' + limit)
            .then(res => res.json())
            .then(res => {
                setTabs(res.tabs)
                setWorks(res.works)
            })
            .catch(err => console.error(err))
    }, [])

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
                <h3><FormattedMessage id="work.subtitle" defaultMessage="Some projects I'm proud of"/></h3>
            </div>
            <Gallery className="content" tabs={tabs} images={works}/>
        </div>
    </section>
}

export default Works
