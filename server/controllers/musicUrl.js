var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicUrl(req, res, next) {
    const id = req.query.id
    const br = req.query.br || 999000
    const data = {
        ids: [id],
        br: 999000
    };
    console.log(data)
    sendRequest(cloudPath.musicUrl, data, req, res)
}
module.exports = musicUrl