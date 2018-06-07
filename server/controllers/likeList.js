var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function likeList(req, res, next) {
    const data = {
        uid: req.query.id,
    }
    sendRequest(cloudPath.likeList, data, req, res)
}
module.exports = likeList