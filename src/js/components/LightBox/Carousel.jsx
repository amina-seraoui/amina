import {useEffect, useRef, useState} from 'react'
import Link from 'next/link'

const Carousel = ({ gallery, names, links, isOpen, setIsOpen, count }) => {
    const [active, setActive] = useState(0)
    const [isRight, setIsRight] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(0)
    const [pos, setPos] = useState(10)
    const [grabbing, setGrabbing] = useState(false)

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

    // Mobile Slide
    const endMove = e => {
        const w = 0.8 * ref.current.clientWidth * 0.15
        end > start + w ? moveLeft() : (end + w < start ? moveRight() : null)
        setPos(10)
        setGrabbing(false)
    }

    const move = e => {
        setEnd(e.changedTouches[0].clientX)
        const x = e.changedTouches[0].clientX * 10 / start
        setPos(x)
    }

    const startMove = e => {
        setGrabbing(true)
        setStart(e.changedTouches[0].clientX)
    }
    // End Mobile Slide

    const content = () => {
        const footer = gallery.map((img, i) => {
            return (names && <p
                key={'p' + i}
                className="footer"
                data-current={(i+1) + '/' + count}
            >
                {
                    (typeof names === 'string') ? names :
                        (names[i] ? names[i] : null)
                }
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
                className={
                    'carousel-item' +
                    (active === i && isLeft ? ' left' : '') +
                    (active === i && isRight ? ' right' : '') +
                    (grabbing ? ' grab' : '')
                }
                style={{
                        left: active === i ? (pos + '%') : (active > i ? '-150%' : '150%')
                    }}
                onClick={handleClick}
                onMouseMove={handleOver}
                onMouseLeave={handleLeave}
                onMouseOver={handleOver}
                title={isRight ? 'Move to right' : isLeft ? 'Move to left' : ''}
                onTouchStart={startMove}
                onTouchMove={move}
                onTouchEnd={endMove}
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
