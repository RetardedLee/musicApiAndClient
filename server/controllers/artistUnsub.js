// artistUnsub
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artistSub(req, res, next) {
    const data = {
        artistId: req.query.id,
        artistIds: [req.query.id]
    };
    console.log(data)
    sendRequest(cloudPath.artistSub, data, req, res)
}
module.exports = artistSub