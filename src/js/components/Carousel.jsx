import {useEffect, useState} from 'react'

const Carousel = ({ gallery, name }) => {
    const [active, setActive] = useState(0)
    const length = gallery.length - 1

    const handleKey = (e) => {
        if (e.code === 'ArrowRight') {
            setActive(a => {
                a = a < length ? a + 1 : 0
                return a
            })
        }
        if (e.code === 'ArrowLeft') {
            setActive(a => {
                a = a > 0 ? a - 1 : length
                return a
            })
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [])

    return <div className="carousel">
        {
            gallery.map((img, i) => {
                return <img
                    key={i}
                    src={'/assets/img/works/' + img}
                    alt={name}
                    style={{left: active === i ? '50%' : (active > i ? '-50%' : '150%')}}
                />
            })
        }
    </div>
}

export default Carousel
