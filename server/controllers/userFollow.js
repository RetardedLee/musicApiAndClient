// userFollow
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userFollow(req, res, next) {
    const id = req.query.uid
    const data = {
        offset: req.query.offset || 0,
        limit: req.query.limit || 30,
        order: true
    }
    sendRequest(`${cloudPath.userFollow}${id}`, data, req, res)
}
module.exports = userFollow