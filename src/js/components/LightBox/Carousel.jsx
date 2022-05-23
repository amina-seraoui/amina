import {useEffect, useRef, useState} from 'react'
import Link from 'next/link'

const Carousel = ({ gallery, names, links, isOpen, setIsOpen }) => {
    const [active, setActive] = useState(0)
    const [isRight, setIsRight] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const length = gallery.length - 1
    const ref = useRef(null)

    const moveRight = () => {
        setActive(a => {
            a = a <= length - 1 ? a + 1 : 0
            return a
        })
    }

    const moveLeft = () => {
        setActive(a => {
            a = a > 0 ? a - 1 : length
            return a
        })
    }

    const handleKey = (e) => {
        isOpen ? e.preventDefault() : null
        if (e.code === 'ArrowRight') {
            moveRight()
        }
        if (e.code === 'ArrowLeft') {
            moveLeft()
        }
        if (e.code === 'ArrowDown') {
            setIsOpen(false)
        }
        if (e.code === 'Enter') {
            isRight ? moveRight() : isLeft ? moveLeft() : null
        }
        if (e.code === 'Space') {
            isRight ? moveRight() : isLeft ? moveLeft() : null
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [gallery, isLeft, isRight])

    useEffect(() => {
        setActive(0)
    }, [isOpen])

    const handleClick = e => {
        isRight ? moveRight() : isLeft ? moveLeft() : null
    }

    const handleOver = e => {
        const w = 0.8 * ref.current.clientWidth
        setIsLeft(e.clientX < e.target.offsetLeft + (0.1 * w))
        setIsRight(e.clientX > e.target.offsetLeft + (0.9 * w))
    }

    const handleLeave = e => {
        setIsLeft(false)
        setIsRight(false)
    }

    const content = () => {
        const footer = gallery.map((img, i) => {
            return (names && <p
                key={'p' + i}
                className="footer"
            >
                {(typeof names === 'string') ? names : (names[i] ? names[i] : null)}
            </p>)
        })

        return gallery.map((img, i) => {
            // eslint-disable-next-line @next/next/no-img-element
            const image = <img key={i}
                               src={img}
                               alt={typeof names === 'string' ? names : (names[i] ? names[i] : null)}
                               style={{cursor: links ? 'pointer' : null}}
            />

            return <div key={i}
                        className={'carousel-item' + (active === i && isLeft ? ' left' : '') + (active === i && isRight ? ' right' : '')}
                        style={{left: active === i ? '10%' : (active > i ? '-150%' : '150%')}}
                        onClick={handleClick}
                        onMouseMove={handleOver}
                        onMouseLeave={handleLeave}
                        onMouseOver={handleOver}
                        title={isRight ? 'Move to right' : isLeft ? 'Move to left' : ''}
            >
                {
                    links ? <Link key={i} href={links[i]} passHref>
                        {image}
                        {footer[i]}
                    </Link> : <>
                        {image}
                        {footer[i]}
                    </>
                }
            </div>
        })
    }

    return <div className="carousel" title="" ref={ref}>
        {content()}
    </div>
}

export default Carousel
