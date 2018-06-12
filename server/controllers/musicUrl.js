var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicUrl(req, res, next) {
    const ids = [req.query.id]
    const br = req.query.br || 999000
    const data = {
        ids: ids,
        br
    };
    sendRequest(cloudPath.musicUrl, data, req, res)
}
module.exports = musicUrl