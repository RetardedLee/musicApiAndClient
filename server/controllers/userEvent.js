// userEvent

var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userEvent(req, res, next) {
    const id = req.query.uid
    const data = {
        time: -1,
        getcounts: true
    }
    sendRequest(`${cloudPath.userEvent}${id}`, data, req, res)
}
module.exports = userEvent