// mvDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function mvDetail(req, res, next) {
    const mvid = req.query.mvid
    const data = {
        id: mvid
    }
    console.log(data)
    sendRequest(cloudPath.mvDetail, data, req, res,(body)=>{
        console.log(body)
    })
}
module.exports = mvDetail