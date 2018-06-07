// musicCheck
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")
const crypto = require("crypto");

function musicCheck(req, res, next) {
    const id = parseInt(req.query.id)
    const br = parseInt(req.query.br || 999000)
    const data = {
        ids: [id],
        br: br
    }
    sendRequest(cloudPath.musicCheck, data, req, res, (body) => {})
}
module.exports = musicCheck