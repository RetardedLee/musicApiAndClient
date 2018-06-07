// similarUser
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function similarUser(req, res, next) {
    const data = {
        songid: req.query.id
    };
    sendRequest(cloudPath.similarUser, data, req, res)
}
module.exports = similarUser