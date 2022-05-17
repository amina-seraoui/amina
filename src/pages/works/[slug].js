import Head from 'next/head'
import {getAll} from '../../js/model'
import Hero from '../../js/components/Home/Hero'
import Header from '../../js/components/Header'
import Stack from '../../js/components/Work/Stack'
import BrandBoard from '../../js/components/Work/BrandBoard'
import Footer from '../../js/components/Footer'
import Link from 'next/link'
import {useState} from 'react'
import LightBox from '../../js/components/LightBox'
import Carousel from '../../js/components/Carousel'
import {FormattedMessage} from 'react-intl'

const Work = ({ work, next, prev }) => {
    const [isOpen, setIsOpen] = useState(false)
    const clickable = Boolean(work.gallery && work.gallery.length)

    return <>
        <Head>
            <title>Amina Seraoui | {work.name}</title>
        </Head>
        <main id="work">
            <Hero image={work.img}>
                <Header />
                <div className="container">
                    <div className="title">
                        <h1>{work.name}</h1>
                        <p>{work.year}</p>
                    </div>
                    <div className="links">
                        <a href={work.link} className="btn secondary" target="_blank" rel="noreferrer">
                            <FormattedMessage id="btn.preview" defaultMessage="Preview" />
                        </a>
                        <Link href="/" passHref><a className="link">
                            <FormattedMessage id="btn.back" defaultMessage="Back" />
                        </a></Link>
                    </div>
                </div>
            </Hero>
            <Stack work={work} setIsOpen={setIsOpen} clickable={clickable}/>
            {work.brandboard && <BrandBoard brandboard={work.brandboard} name={work.name}/>}
            <Footer next={next} prev={prev}/>
        </main>
        {
            clickable && <LightBox isOpen={isOpen} setIsOpen={setIsOpen}>
                <Carousel gallery={work.gallery} names={work.name} index={0} />
            </LightBox>
        }
    </>
}

export default Work

export async function getStaticPaths() {
    const works = await getAll('works')
    const locales = ['fr', 'en', 'ar']
    const paths = []

    works.forEach((work, i) => {
        locales.forEach(locale => {console.log(locale)
            paths.push({
                params: {
                    slug: work.slug
                },
                locale
            })
        })
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const works = await getAll('works')
    let work, index, next, prev

    works.forEach((w, i) => {
        if (w.slug === params.slug) {
            work = w
            index = i
        }
    })

    next = (index + 1) < works.length - 1 ? index + 1 : 0
    prev = (index - 1) >= 0 ? index - 1 : works.length - 1

    next = (next !== index ? next : null)
    prev = (prev !== index ? prev : null)

    return {
        props: {
            work,
            next: {
                slug: works[next].slug,
                name: works[next].name
            },
            prev: {
                slug: works[prev].slug,
                name: works[prev].name
            }
        }
    }
}
