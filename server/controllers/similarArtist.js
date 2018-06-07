// similarArtist
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function similarArtist(req, res, next) {
    const id = req.query.id
    const data = {
        artistid: id
    }
    sendRequest(cloudPath.similarArtist, data, req, res)
}
module.exports = similarArtist