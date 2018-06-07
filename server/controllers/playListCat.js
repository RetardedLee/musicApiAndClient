// playlistCat
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistCat(req, res, next) {
    const data = {}
    sendRequest(cloudPath.playlistCat, data, req, res)
}
module.exports = playlistCat