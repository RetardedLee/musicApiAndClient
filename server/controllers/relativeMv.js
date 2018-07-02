// relativeMv

var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function relativeMv(req, res, next) {
    const data = {
        id:req.query.id,
        type:req.query.type
    }
    sendRequest(cloudPath.relativeMv, data, req, res, (body) => {})
}
module.exports = relativeMv