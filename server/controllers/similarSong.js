//similarSongs
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function similarSong(req, res, next) {
    const data = {
        songid: req.query.id
    };
    sendRequest(cloudPath.similarSongs, data, req, res)
}
module.exports = similarSong