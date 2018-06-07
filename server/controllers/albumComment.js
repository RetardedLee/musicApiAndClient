// albumComment
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function albumComment(req, res, next) {
    const id = req.query.id
    const data = {
        offset: req.query.offset || 0,
        rid: id,
        limit: req.query.limit || 20,
    }
    sendRequest(`${cloudPath.albumComment}/${id}`, data, req, res)
}
module.exports = albumComment