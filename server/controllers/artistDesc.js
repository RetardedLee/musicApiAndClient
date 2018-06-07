var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artistDesc(req, res, next) {
    const id = req.query.id
    sendRequest(cloudPath.artistDesc, data, req, res)
}
module.exports = artistDesc