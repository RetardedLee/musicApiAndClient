// userFans

var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userFans(req, res, next) {
    const id = req.query.uid
    const data = {
        time: -1,
        getcounts: true
    }
    sendRequest(`${cloudPath.useruserFansEvent}${id}`, data, req, res)
}
module.exports = userFans