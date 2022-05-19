import {useEffect, useState} from 'react'
import Tabs from '../Tabs'

const Gallery = ({ setIsOpen, tabs, images, setIndex, setGallery, setNames, setLinks }) => {
    const [activeTab, setActiveTab] = useState('all')
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(false)
        const timeout = setTimeout(() => setFade(true), 50)
        // filtre les tabs pour retourner les images actuelles
        const works = images.filter(tab => (tab.tab === activeTab)).flatMap(tab => tab.works)
        setGallery(works.map(w => w.img))
        setNames(works.map(w => w.name))
        setLinks(works.map(w => 'works/' + w.slug))
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
                images.map(tab => {
                    if (tab.tab === activeTab) {
                        return tab.works.map((image, i) => {
                            return <div className="tab-content" onClick={e => handleClick(i)} key={i}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={image.min} width={450} height={250} alt={image.name}/>
                                <span className="label">{image.name}</span>
                            </div>
                        })
                    }
                })
            }
        </div>
    </>
}

export default Gallery
