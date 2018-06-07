var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function topMv(req, res, next) {
    const data = {
        offset: req.query.offset || 0,
        total: true,
        limit: req.query.limit || 30,
    }
    sendRequest(cloudPath.topMv, data, req, res)
}
module.exports = topMv