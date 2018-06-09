// privateMv
const sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function privateMv(req, res, next) {
    const data = {}
    sendRequest(cloudPath.privateMv, data, req, res)
}
module.exports = privateMv