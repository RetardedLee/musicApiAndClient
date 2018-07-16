// loginRefresh
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")
function loginRefresh(req, res, next) {

    sendRequest(cloudPath.loginRefresh, {}, req, res, (body) => {})
}
module.exports = loginRefresh