// privateList
const sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function privateList(req, res, next) {
    const data = {}
    sendRequest(cloudPath.privateList, data, req, res)
}
module.exports = privateList