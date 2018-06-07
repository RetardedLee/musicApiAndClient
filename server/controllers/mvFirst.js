// mvFirst
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function mvFirst(req, res, next) {
    const data = {
        total: true,
        limit: req.query.limit || 30,
    }
    sendRequest(`${cloudPath.mvFirst}`, data, req, res)
}
module.exports = mvFirst