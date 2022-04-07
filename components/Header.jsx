import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return <header>
        <nav className="navbar">
            <Link href="/">
                <a>
                    <Image
                        src="/assets/img/logo.svg"
                        alt="Logo Amina Seraoui"
                        width={42}
                        height={42}
                    />
                </a>
            </Link>
            <Link href="tel:+33667306435">(+33) 6 67 30 64 35</Link>
        </nav>
    </header>
}

export default Header