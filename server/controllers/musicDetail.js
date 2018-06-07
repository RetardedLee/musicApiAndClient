// musicDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function musicDetail(req, res, next) {
    const id = parseInt(req.query.index)
    const data = {
        c: JSON.stringify([{ id: id }]),
        ids: [id]
    }
    console.log(data)
    sendRequest(cloudPath.musicDetail, data, req, res)
}
module.exports = musicDetail