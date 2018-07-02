// vedioDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function vedioDetail(req, res, next) {
    const id = req.query.id
    const data = {
        id: id
    }
    sendRequest(cloudPath.vedioDetail, data, req, res,(body)=>{
    })
}
module.exports = vedioDetail