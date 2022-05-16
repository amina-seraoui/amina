import {useEffect, useState} from 'react'
import Tabs from '../Tabs'

const Gallery = ({ setIsOpen, tabs, images, setIndex }) => {
    const [activeTab, setActiveTab] = useState('all')
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(false)
        const timeout = setTimeout(() => setFade(true), 50)
        return () => clearTimeout(timeout)
    }, [activeTab])

    const handleClick = i => {
        setIsOpen(true)
        setIndex(i)
    }

    return <>
        <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab}/>
        <div className={'tab' + (fade ? ' visible' : '')}>
             {
                images.map((image, i) => {
                    if (activeTab === 'all' || image.tabs.indexOf(activeTab) !== -1) {
                        return <div className="tab-content" onClick={e => handleClick(i)} key={i}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={'/assets/img/works/' + image.min} width={450} height={250} alt={image.name}/>
                            <span className="label">{image.name}</span>
                        </div>
                    }
                })
            }
        </div>
    </>
}

export default Gallery
