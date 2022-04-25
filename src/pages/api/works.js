import {getAll} from '../../js/model'

// const works = getAll('works') // <<<< replace with that
const works = require('../../../db/works.json')
const tabs = require('../../../db/tabs.json')


export default function handler(req, res) {
    const {slug} = req.query
    if (slug) {
        const work = works.filter(work => work.slug === slug)
        console.log(work)
    } else res.status(200).json({tabs, works})
}