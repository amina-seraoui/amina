import Link from 'next/link'
import Image from 'next/image'
import {useEffect} from 'react'
import {useIntl} from 'react-intl'

const LightBox = ({ original, min, label, active, setActive, next, prev, link }) => {
    const intl = useIntl()

    const seeMore = intl.formatMessage({ id: 'see.more', defaultMessage: 'See more' })
    const close = intl.formatMessage({ id: 'click.close', defaultMessage: 'Click to close' })

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
                <div className={'light-box original'} onClick={handleClick} title={close}>
                    <div className="content" title="">
                        {
                            link ?
                                <Link href={link} passHref>
                                    <img src={original} alt={label} title={seeMore}/>
                                </Link> :
                                <Image src={original} alt={label}/>
                        }
                        <p className="footer">
                            <span className="label">{label}</span>
                        </p>
                    </div>
                </div> :
                null
        }
        <div className="light-box min" onClick={setActive}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={min} width={450} height={250} alt={label}/>
            <span className="label">{label}</span>
        </div>
    </>
}

export default LightBox