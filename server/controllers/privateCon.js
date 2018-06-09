// privateCon
const sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function privateCon(req, res, next) {
    const data = {}
    sendRequest(cloudPath.privateCon, data, req, res)
}
module.exports = privateCon