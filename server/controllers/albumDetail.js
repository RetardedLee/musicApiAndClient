// albumDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function albumDetail(req, res, next) {
    const id = req.query.id
    const data = {}
    sendRequest(`${cloudPath.albumDetail}/${id}`, data, req, res)
}
module.exports = albumDetail