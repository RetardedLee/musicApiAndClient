// mvComment
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function mvUrl(req, res, next) {
    const id = req.query.id
    const data = {
        id:id,
        r:req.query.type || 240 
    }
    sendRequest(`${cloudPath.mvUrl}`, data, req, res)
}
module.exports = mvUrl