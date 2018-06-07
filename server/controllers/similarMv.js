// similarMv
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function similarMv(req, res, next) {
    const data = {
        mvid: req.query.mvid
    };
    sendRequest(cloudPath.similarMv, data, req, res)
}
module.exports = similarMv