import Head from 'next/head'
import SocialsBar from '../js/components/Home/SocialsBar'
import Header from '../js/components/Header'
import Hero from '../js/components/Home/Hero'
import TypingText from '../js/components/TypingText'
import About from '../js/components/Home/About'
import Skills from '../js/components/Home/Skills'
import Works from '../js/components/Home/Works'
import Contact from '../js/components/Home/Contact'
import Footer from '../js/components/Footer'
import AnimatedStars from '../js/components/AnimatedStars'
// import useScroll from '../js/hooks/useScroll'
import useGetAge from '../js/hooks/useGetAge'
import {useState, useEffect} from 'react'
import Alerts from '../js/components/Alerts'
import Link from 'next/link'
import {FormattedMessage, useIntl} from 'react-intl'
import LightBox from '../js/components/LightBox'
import Carousel from '../js/components/Carousel'

const Home = ({ dir }) => {
    const [isOpen, setIsOpen] = useState(false)
    let age = useGetAge('11/22/1997')
    // useScroll()
    const [createAlert, setCreateAlert] = useState(() => {})
    const intl = useIntl()
    const heroTexts = [
        intl.formatMessage({ id: 'hero.hello', defaultMessage: ' Hello World !' }),
        intl.formatMessage({ id: 'hero.whoami', defaultMessage: 'I\'m Amina Seraoui' }),
        intl.formatMessage({
            id: 'hero.about',
            defaultMessage: "I'm a {age} years old french developer"
        }, {age}),
        intl.formatMessage({ id: 'hero.enjoy', defaultMessage: 'Enjoy your visit !' })
    ]

    const [tabs, setTabs] = useState(['all'])
    const [works, setWorks] = useState([])
    const [gallery, setGallery] = useState([])
    const [names, setNames] = useState([])
    const [links, setLinks] = useState(null)
    const limit = 6
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch('/api/works?limit=' + limit)
            .then(res => res.json())
            .then(res => {
                setTabs(res.tabs)
                setWorks(res.works)
                setGallery(res.works.map(w => w.img))
                setNames(res.works.map(w => w.name))
                setLinks(res.works.map(w => 'works/' + w.slug))
            })
            .catch(err => console.error(err))
    }, [])

    // Reinit index on close
    useEffect(() => {
        isOpen === false ? setIndex(-1) : null
    }, [isOpen])


    return <>
        <Head>
            <title>Amina Seraoui | Home</title>
            <meta name="description" content="Portfolio d'Amina Seraoui"/>
        </Head>
        <SocialsBar />
        <Alerts setCreateAlert={setCreateAlert}/>
        <main id="home" data-scroll-container="">
            {/* première section */}
            <Hero image="header-moon.png">
                <AnimatedStars />
                <Header />
                <div className="container" data-scroll="" data-scroll-speed="5" style={{alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start'}}>
                    <h1 data-scroll="" data-scroll-speed="-7" dir={dir}>
                        <TypingText
                            texts={heroTexts}
                            replaces={[
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /Am?i?n?a?/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /السلام/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /الله/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /أمينة/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /مطورة/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: /ويب/,
                                    by: '<strong>{match}</strong>'
                                },
                                {
                                    type: 'regex',
                                    action: 'replace',
                                    what: / d[ée]?v?e?l?o?p?((p?e?u?s?e?)(e?r?))/,
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
                                    what: heroTexts[3],
                                    by: ' <i class="em em-rocket"></i>'
                                },
                                {
                                    type: 'text',
                                    action: 'add',
                                    what: heroTexts[0],
                                    by: ' <i class="em em-wave" />'
                                },
                            ]}
                        />
                    </h1>
                    <Link href="#contact" passHref>
                        <button className="btn secondary">
                            <FormattedMessage id="contact.me" defaultMessage="Contact me" />
                        </button>
                    </Link>
                </div>
            </Hero>
            {/* deuxième section */}
            <About age={age}/>
            {/* troisième section */}
            <Skills>
                {
                    [
                        {
                            label: 'SCSS',
                            value: 85
                        },
                        {
                            label: 'Symfony',
                            value: 70
                        },
                        {
                            label: 'React JS',
                            value: 75
                        }
                    ]
                }
            </Skills>
            {/* quatrième section */}
            <Works setIsOpen={setIsOpen} tabs={tabs} works={works} setIndex={setIndex} />
            {/* cinquième section */}
            <Contact createAlert={createAlert} />
            {/* sixième section */}
            <Footer />
        </main>
        <LightBox isOpen={isOpen} setIsOpen={setIsOpen}>
            <Carousel gallery={gallery} names={names} index={index} links={links}/>
        </LightBox>
    </>
}

export default Home
