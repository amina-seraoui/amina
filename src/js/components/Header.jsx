import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Flag from './Flag'

const Header = () => {
    const {locales} = useRouter()

    return <header>
        <nav className="navbar">
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
                {
                    locales.map(l => <Flag key={l} locale={l} />)
                }
                <a className="link" href="tel:+33667306435">(+33) 6 67 30 64 35</a>
            </div>
        </nav>
    </header>
}

export default Header