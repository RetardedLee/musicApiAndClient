//similarList
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function similarList(req, res, next) {
    const data = {
        songid: req.query.id
    };
    sendRequest(cloudPath.similarList, data, req, res)
}
module.exports = similarList