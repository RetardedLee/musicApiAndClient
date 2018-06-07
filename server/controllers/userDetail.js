// userDetail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userDetail(req, res, next) {
    const id = req.query.uid
    sendRequest(`${cloudPath.userDetail}/${id}`, data, req, res)
}
module.exports = userDetail