// loginRefresh
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")
const crypto = require("crypto");

function loginRefresh(req, res, next) {
    const phone = req.query.phone;
    const md5sum = crypto.createHash("md5");
    md5sum.update(req.query.password);
    const data = {};
    sendRequest(cloudPath.loginRefresh, data, req, res, (body) => {})
}
module.exports = loginRefresh