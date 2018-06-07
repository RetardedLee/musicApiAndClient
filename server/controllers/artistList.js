// artistList
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artistList(req, res, next) {
    const data = {
        categoryCode: req.query.cat || "1001",
        offset: req.query.offset || 0,
        total: true,
        limit: req.query.limit || 30
    };
    sendRequest(cloudPath.artistList, data, req, res)
}
module.exports = artistList