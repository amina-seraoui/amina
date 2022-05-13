import {getAll, getBy, withLimit} from '../../js/model'

const getTabs = async () => {
    return getAll('tabs')
}
const getWorks = async () => {
    return getAll('works')
}
const getBySlug = async (slug) => {
    return getBy('works', 'slug', slug)
}
const getLimited = async (limit) => {
    return withLimit('works', limit)
}

export default async function handler(req, res) {
    const rep = {}

    if (Object.keys(req.query).includes('slug')) {
        rep.work = await getBySlug(req.query.slug)
    }

    else {
        rep.tabs = ['all', ...await getTabs()]
        if (req.query.limit) {
            rep.works = await getLimited(req.query.limit)
        } else rep.works = await getWorks()
    }

    res.status(200).json(rep)
}
