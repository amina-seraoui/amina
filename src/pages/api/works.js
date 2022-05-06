import {getAll} from '../../js/model'

// const w = await getAll('works') // <<<< replace with that
const works = require('../../../db/works.json')
const tabs = require('../../../db/tabs.json')

export default async function handler(req, res) {
    const w = await getAll('works')
    console.log(w)
    const {slug} = req.query
    if (slug) {
        const work = works.filter(work => work.slug === slug)
        console.log(work)
    } else res.status(200).json({tabs, works})
}