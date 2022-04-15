const works = require('../../db/works.json')
const tabs = require('../../db/tabs.json')

export default function handler(req, res) {
    res.status(200).json({tabs, works})
}