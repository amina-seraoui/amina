import Gallery from './Gallery'
import {useState, useEffect} from 'react'
import SectionTitle from '../SectionTitle'

const Works = () => {
    const [tabs, setTabs] = useState(['all'])
    const [works, setWorks] = useState([])
    const limit = 6

    useEffect(() => {
        fetch('/api/works?limit=' + limit)
            .then(res => res.json())
            .then(res => {
                setTabs(['all', ...res.tabs])
                setWorks(res.works)
            })
            .catch(err => error.log(err))
    }, [])

    return <section id="works" data-scroll-section="">
        <div className="container">
            <SectionTitle
                h2={'Some <span class="strong">works</span>'}
                h3={'Some projects I\'m proud of'}
            />
            <Gallery className="content" tabs={tabs} images={works}/>
        </div>
    </section>
}

export default Works