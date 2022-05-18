import {useEffect, useState} from 'react'
import Link from 'next/link'

const Carousel = ({ gallery, names, index, links }) => {
    const [active, setActive] = useState(index)
    const length = gallery.length - 1

    const handleKey = (e) => {
        if (e.code === 'ArrowRight') {
            setActive(a => {
                a = a <= length - 1 ? a + 1 : 0
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
    }, [gallery])

    useEffect(() => {
        setActive(index)
    }, [index])

    const content = () => {
        const img = gallery.map((img, i) => {
            const image = <img key={i}
                               src={img}
                               alt={typeof names === 'string' ? names : (names[i] ? names[i] : null)}
                               style={{left: active === i ? '50%' : (active > i ? '-50%' : '150%'), cursor: links ? 'pointer' : null}}
            />

            return links ? <Link key={i} href={links[i]} passHref>
                {image}
            </Link> : image
        })

        const footer = gallery.map((img, i) => {
            return (names && <p
                key={'p' + i}
                className="footer"
                style={{left: active === i ? '50%' : (active > i ? '-50%' : '150%')}}
            >
                {(typeof names === 'string') ? names : (names[i] ? names[i] : null)}
            </p>)
        })

        return [img, footer]
    }

    return <div className="carousel" title="">
        {content()}
    </div>
}

export default Carousel
