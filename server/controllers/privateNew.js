// privateNew

const sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function privateNew(req, res, next) {
    const data = {}
    sendRequest(cloudPath.privateNew, data, req, res)
}
module.exports = privateNew