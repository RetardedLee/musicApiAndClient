// playListDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playListDetail(req, res, next) {
    const data = {
        id: req.query.id,
        n: 100000,
        s: req.query.s || 8,
        csrf_token: ""
    };
    sendRequest(cloudPath.playListDetail, data, req, res)
}
module.exports = playListDetail