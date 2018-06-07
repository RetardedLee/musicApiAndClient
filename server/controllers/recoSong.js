// recoSongs
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function recoSongs(req, res, next) {
    const data = {
        offset: 0,
        total: true,
        limit: 20
    }
    sendRequest(cloudPath.recoSongs, data, req, res, (body) => {})
}
module.exports = recoSongs