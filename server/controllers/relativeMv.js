// relativeMv

var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function relativeMv(req, res, next) {
    const data = {
       mvId:req.query.id 
    }
    sendRequest(cloudPath.relativeMv, data, req, res, (body) => {})
}
module.exports = relativeMv