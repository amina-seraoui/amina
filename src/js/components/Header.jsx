import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Flag from './Flag'
import {useEffect, useState} from 'react'
import {FormattedMessage} from 'react-intl'

const Header = () => {
    const {locales} = useRouter()
    const [scroll, setScroll] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 0) setScroll(true)
        else setScroll(false)
    }

    useEffect(() => {
        handleScroll()
        document.addEventListener('scroll', handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return <header>
        <nav className={'navbar' + (scroll ? ' scroll' : '')}>
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href="/" passHref>
                <a>
                    <Image
                        src="/assets/img/logo.svg"
                        alt="Logo Amina Seraoui"
                        width={42}
                        height={42}
                    />
                </a>
            </Link>
            <div className="links">
                <div className="flags">
                    {
                        locales.map(l => <Flag key={l} locale={l} />)
                    }
                </div>
                <Link href="/#contact"><a className="link">
                    <FormattedMessage id="btn.contact" defaultMessage="Contact me" />
                </a></Link>
            </div>
        </nav>
    </header>
}

export default Header
