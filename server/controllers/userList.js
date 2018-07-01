// userList
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userList(req, res, next) {
    const data = {
        offset: req.query.offset || 0,
        uid: req.query.id,
        limit: req.query.limit || 30, //貌似无效
    };
    sendRequest(cloudPath.userList, data, req, res)
}
module.exports = userList