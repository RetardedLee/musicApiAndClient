// playlistSub
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistSub(req, res, next) {
    const data = {
        id: req.query.id
    };
    const action = req.query.t == 1 ? "subscribe" : "unsubscribe";
    sendRequest(cloudPath.playlistSub, data, req, res)
}
module.exports = playlistSub