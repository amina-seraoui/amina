import Head from 'next/head'
import { getAll, getBy } from '../../js/model'
import Hero from '../../js/components/Home/Hero'
import Header from '../../js/components/Header'
import Stack from '../../js/components/Work/Stack'
import BrandBoard from '../../js/components/Work/BrandBoard'

const Work = ({ work }) => {
    return <>
        <Head>
            <title>Amina Seraoui | {work.name}</title>
        </Head>
        <main id="work">
            <Hero image={'works/' + work.img}>
                <Header />
                <div className="container">
                    <div className="title">
                        <h1>{work.name}</h1>
                        <p>{work.year}</p>
                    </div>
                    <a href={work.link} className="btn secondary" target="_blank" rel="noreferrer">Voir le site</a>
                </div>
            </Hero>
            <Stack work={work}/>
            {work.brandboard && <BrandBoard brandboard={work.brandboard} name={work.name}/>}
        </main>
    </>
}

export default Work

export async function getStaticPaths() {
    const works = await getAll('works')
    // console.log(works)
    return {
        paths: works.map(work => {
            return {params: {slug: work.slug}, locale: 'fr' }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const work = await getBy('works', 'slug', params.slug)
    return {
        props: {work}
    }
}