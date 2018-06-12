// musicLyric
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicLyric(req, res, next) {
    const id = parseInt(req.query.id)
    const data = {}
    sendRequest(`${cloudPath.musicLyric}?os=osx&id=${id}&lv=-1&kv=-1&tv=-1`, data, req, res)
}
module.exports = musicLyric