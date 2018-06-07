// playlistHq
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistHq(req, res, next) {
    const data = {
        cat: req.query.cat || "全部",
        offset: req.query.offset || 0,
        limit: req.query.limit || 20
    };
    sendRequest(cloudPath.playlistHq, data, req, res)
}
module.exports = playlistHq