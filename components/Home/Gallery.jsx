import {useEffect, useState} from 'react'
import Tabs from '../Tabs'
import LightBox from '../LightBox'

const Gallery = ({ tabs, images }) => {
    const [activeTab, setActiveTab] = useState('all')
    const [fade, setFade] = useState(false)
    const [activeImg, setActiveImg] = useState(-1)

    useEffect(() => {
        setFade(false)
        const timeout = setTimeout(() => setFade(true), 50)
        return () => clearTimeout(timeout)
    }, [activeTab])

    const handleClick = (i) => {
        activeImg === i ? setActiveImg(-1) : setActiveImg(i)
    }

    const nextImage = () => {
        if (activeImg < images.length - 1) {
            setActiveImg(i => i+1)
        } else {
            setActiveImg(0)
        }
    }

    const prevImage = () => {
        if (activeImg > 0) {
            setActiveImg(i => i - 1)
        } else {
            setActiveImg(images.length - 1)
        }
    }

    return <div className="gallery">
        <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab}/>
        <div className={'tab' + (fade ? ' visible' : '')}>
            {
                images.map((image, i) => {
                    if (activeTab === 'all' || image.tabs.indexOf(activeTab) !== -1) {
                        return <LightBox
                            active={activeImg === i}
                            setActive={e => handleClick(i)}
                            original={'/assets/img/works/' + image.img}
                            min={'/assets/img/works/' + image.min}
                            label={image.name}
                            link={'/works/' + image.slug}
                            next={nextImage}
                            prev={prevImage}
                            key={i}
                        />
                    }
                })
            }
        </div>
    </div>
}

export default Gallery