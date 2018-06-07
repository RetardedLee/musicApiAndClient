// playlistHot
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistHot(req, res, next) {
    const data = {}
    sendRequest(cloudPath.playlistHot, data, req, res)
}
module.exports = playlistHot