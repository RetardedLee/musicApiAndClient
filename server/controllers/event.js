var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function event(req, res, next) {
    const data = {}
    sendRequest(cloudPath.event, data, req, res)
}
module.exports = event