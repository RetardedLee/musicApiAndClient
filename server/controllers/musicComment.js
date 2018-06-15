// musicComment
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicComment(req, res, next) {
    const rid = req.query.id
    const data = {
        offset: req.query.offset || 0,
        rid: rid,
        limit: req.query.limit || 20,
        csrf_token: ""
    };
    sendRequest(`${cloudPath.musicComment}${rid}`, data, req, res)
}
module.exports = musicComment