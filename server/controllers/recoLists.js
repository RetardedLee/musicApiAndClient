// recoLists
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function recoLists(req, res, next) {
    const data = {}
    sendRequest(cloudPath.recoLists, data, req, res)
}
module.exports = recoLists