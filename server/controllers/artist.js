var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function artist(req, res, next) {
    const id = req.query.id
    let data={}
    sendRequest(`${cloudPath.artist}/${id}`, data, req, res)
}
module.exports = artist