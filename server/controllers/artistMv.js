var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artistMv(req, res, next) {
    const artistId=req.query.id
    const limit = req.query.limit || 20
    const type = req.query.type || 1
    const s = req.query.s
    const offset = req.query.offset || 0
    const data = {
        limit: limit,
        type: type,
        s: s,
        offset: offset,
        artistId
    };
    sendRequest(cloudPath.artistMv, data, req, res)
}
module.exports = artistMv