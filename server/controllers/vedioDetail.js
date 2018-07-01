// vedioDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function mvDetail(req, res, next) {
    const id = req.query.id
    const data = {
        id: id
    }
    sendRequest(cloudPath.mvDetail, data, req, res,(body)=>{
        console.log(body)
    })
}
module.exports = mvDetail