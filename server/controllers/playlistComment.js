// playlistComment
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistComment(req, res, next) {
    const rid = req.query.id
    const data = {
        offset: req.query.offset || 0,
        rid: rid,
        limit: req.query.limit || 20,
    }
    sendRequest(`${cloudPath.playlistComment}${rid}`, data, req, res)
}
module.exports = playlistComment