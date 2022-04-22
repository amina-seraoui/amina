import Link from 'next/link'
import {useEffect} from 'react'

const LightBox = ({ original, min, label, active, setActive, next, prev, link }) => {
    const handleKey = e => {
        if (e.code === 'ArrowRight') next()
        if (e.code === 'ArrowLeft') prev()
        if (e.code === 'ArrowDown') setActive(e)
    }

    const handleClick = e => {
        if (e.target.classList.contains('original')) {
            setActive(e)
        }
    }

    useEffect(() => {
        if (active) document.addEventListener('keyup', handleKey)
        return () => document.removeEventListener('keyup', handleKey)
    }, [active])

    return <>
        {
            active ?
                <div className={'light-box original'} onClick={handleClick} title="Click to close">
                    <div className="content" title="">
                        {
                            link ?
                                <Link href={link}>
                                    <img src={original} alt={label} title="See more"/>
                                </Link> :
                                <img src={original} alt={label}/>
                        }
                        <p className="footer">
                            <span className="label">{label}</span>
                        </p>
                    </div>
                </div> :
                null
        }
        <div className="light-box min" onClick={setActive}>
            <img src={min} width={450} height={250} alt={label}/>
            <span className="label">{label}</span>
        </div>
    </>
}

export default LightBox