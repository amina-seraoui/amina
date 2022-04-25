import Head from 'next/head'
import { getAll, getBy } from '../../js/model'

const Work = ({ work }) => {
    return <>
        <Head>
            <title>Amina Seraoui | {work.name}</title>
        </Head>
        
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
    console.log('found :', work)
    return {
        props: {work}
    }
}