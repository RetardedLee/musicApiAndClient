// vedioDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function vedioUrl(req, res, next) {
    const id = req.query.id
    const data = {
        ids: JSON.stringify([id]),
        resolution:req.query.type || 240
    }
    sendRequest(cloudPath.vedioUrl, data, req, res,(body)=>{

    })
}
module.exports = vedioUrl