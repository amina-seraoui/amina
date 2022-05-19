import {withLimit, getAll, getBy, inWithLimit} from '../../js/model'
import {log} from 'three/examples/jsm/nodes/ShaderNode'

const getTabs = async () => {
    return (await getAll('tabs')).map(tab => tab.name)
}
const getWorks = async () => {
    return getAll('works')
}
const getBySlug = async (slug) => {
    return getBy('works', 'slug', slug)
}
const getLimited = async (limit) => {
    return await withLimit('works', limit)
}
const getByTab = async (by, limit) => {
    return await inWithLimit('works', 'tabs', by, limit)
}

export default async function handler(req, res) {
    const rep = {}

    if (Object.keys(req.query).includes('slug')) {
        rep.work = await getBySlug(req.query.slug)
    } else {
        const tabs = await getTabs()
        const promises = tabs.map(async (tab, i) => {
            return {tab, works: await getByTab(tab, 6)}
        })

        rep.tabs = ['all', ...tabs]

        rep.works = [
            {
                tab: "all",
                works: await getLimited(6)
            },
            ...await Promise.all(promises)
        ]
    }
    res.status(200).json(rep)
}
