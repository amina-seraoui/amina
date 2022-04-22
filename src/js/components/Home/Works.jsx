import Gallery from './Gallery'
import {useState, useEffect} from 'react'

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
            <div className="title">
                <h2>Some <span className="strong">works</span></h2>
                <h3>Some projects I'm proud of</h3>
            </div>
            <Gallery className="content" tabs={tabs} images={works}/>
        </div>
    </section>
}

export default Works
