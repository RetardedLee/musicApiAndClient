// userRecord
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userRecord(req, res, next) {
    const data = {
        type: req.query.type || 0, //1 weekdata 0 all
        uid: req.query.uid, //用户 id,
    }
    sendRequest(`${cloudPath.userRecord}`, data, req, res)
}
module.exports = userRecord