import Head from 'next/head'
import SocialsBar from '../components/Home/SocialsBar'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import TypingText from '../components/TypingText'
import About from '../components/Home/About'
import Skills from '../components/Home/Skills'
import Works from '../components/Home/Works'
import Contact from '../components/Home/Contact'

const calculateAge = (birth) => {
    // calcule la différence en timestamp
    return new Date(Date.now() - new Date(birth).getTime()).getUTCFullYear() - 1970
}

const Home = () => {
    let age = calculateAge('11/22/1997')
    return <>
        <Head>
            <title>Amina Seraoui</title>
            <meta name="description" content="Portfolio d'Amina Seraoui"/>
            <link rel="shortcut icon" href="/assets/img/dark-logo.svg" type="image/x-icon"/>
        </Head>
        <SocialsBar />
        <main id="home">
            {/* première section */}
            <Hero image="header-moon.jpg">
                <Header />
                <div className="container">
                    <h1>
                        <TypingText
                            texts={[
                                'Hello !',
                                'I\'m Amina Seraoui',
                                'I\'m ' + age + ' years old',
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
                    <a className="btn secondary" href="#contact">Contact me</a>
                </div>
            </Hero>
            {/* deuxième section */}
            <About age={age}/>
            {/* troisième section */}
            <Skills>
                {
                    [
                        {
                            label: 'HTML5',
                            value: 100
                        },
                        {
                            label: 'Css3',
                            value: 100
                        },
                        {
                            label: 'Javascript',
                            value: 85
                        },
                        {
                            label: 'React',
                            value: 75
                        },
                        {
                            label: 'Figma',
                            value: 60
                        },
                        {
                            label: 'Photoshop',
                            value: 50
                        },
                        {
                            label: 'php',
                            value: 95
                        },
                        {
                            label: 'Symfony',
                            value: 75
                        }
                    ]
                }
            </Skills>
            {/* quatrième section */}
            <Works />
            {/* cinquième section */}
            <Contact />
        </main>
    </>
}

export default Home