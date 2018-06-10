// topArtist
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function topArtist(req, res, next) {
    const data = {
        offset: req.query.offset || 0,
        total: true,
        limit: req.query.limit || 50,
        initial:req.query.initial || -1
    }
    sendRequest(cloudPath.topArtist, data, req, res)
}
module.exports = topArtist