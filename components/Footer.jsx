import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return <footer>
        <div className="container">
            <div className="title">
                <h2><span className="strong">Thank</span> you</h2>
                <h3>Thank you for your visit</h3>
            </div>
            <div className="content">
                <div className="jetbrains">
                    <p>
                        Special thanks to <a
                        href="https://jb.gg/OpenSource" className="link" target="_blank" rel="noreferrer"
                    >
                        Jetbrains
                    </a> for their very useful Open Source license on their awesome products.
                    </p>
                    <a href="https://jb.gg/OpenSource" target="_blank" rel="noreferrer">
                        <Image src="/assets/img/jetbrains.svg" alt="Jetbrains logo" width={64} height={64}/>
                    </a>
                </div>

                <Link href="/">
                    <a>
                        <Image src="/assets/img/logo.svg" alt="Logo Tasmim Concept" width={64} height={64}/>
                    </a>
                </Link>

                <p className="small">
                    Copyright © 2021 - Amina Seraoui. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
}

export default Footer