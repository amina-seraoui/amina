import Head from 'next/head'
import Socials from '../components/Socials'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TypingText from '../components/TypingText'

const calculateAge = (birth) => {
    // calcule la différence en timestamp
    const diff = new Date(Date.now() - new Date(birth).getTime()).getUTCFullYear()
    return diff - 1970
}

const Home = () => {
    return <>
        <Head>
            <title>Amina Seraoui</title>
            <meta name="description" content="Portfolio d'Amina Seraoui"/>
            <link rel="shortcut icon" href="/assets/img/dark-logo.svg" type="image/x-icon"/>
        </Head>
        <Socials />
        <main id="home">
            <Hero image="/assets/img/header-moon.jpg">
                <Header />
                <div className="content">
                    <h1>
                        <TypingText
                            texts={[
                                'Hello !',
                                'I\'m Amina Seraoui',
                                'I\'m ' + calculateAge('11/22/1997') + ' years old',
                                'and I\'m a french developer',
                                'Enjoy your visit !'
                            ]}
                            replaces={[
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /I'?m?/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'text',
                                    action: 'replace',
                                    what: 'french',
                                    by: '<i class="em em-flag-cp"></i>'
                                },
                                {
                                    type: 'text',
                                    action: 'add',
                                    what: 'Enjoy your visit !',
                                    by: ' <i class="em em-rocket"></i>'
                                }
                            ]}
                        />
                    </h1>
                    <a className="btn primary" href="#contact">Contact me</a>
                </div>
            </Hero>
        </main>
    </>
}

export default Home