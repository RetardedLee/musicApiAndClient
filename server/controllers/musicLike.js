var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicLike(req, res, next) {
    const trackId = req.query.id
    const like = req.query.like || true
    const alg = req.query.alg || 'itembased'
    const time = req.query.time || 25
    const data = {
        trackId,
        like
    }
    sendRequest(`${cloudPath.musicLike}?alg=${alg}&trackId=${trackId}&like=${like}&time=${time}`, data, req, res)
}
module.exports = musicLike