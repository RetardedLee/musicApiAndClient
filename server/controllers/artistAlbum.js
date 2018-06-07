var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artistAlbum(req, res, next) {
    const id = req.query.id
    const limit = req.query.limit || 20
    const total = true
    const offset = req.query.offset || 0
    const data = {
        limit,
        total,
        offset
    };
    sendRequest(`${cloudPath.artistAlbum}/${id}`, data, req, res)
}
module.exports = artistAlbum