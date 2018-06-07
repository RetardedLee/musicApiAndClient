// loginMobi
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")
const crypto = require("crypto");

function loginMobi(req, res, next) {
    const phone = req.query.phone;
    const md5sum = crypto.createHash("md5");
    md5sum.update(req.query.password);
    const data = {
        phone: phone,
        password: md5sum.digest("hex"),
        rememberLogin: "true"
    };
    sendRequest(cloudPath.loginMobi, data, req, res, (body) => {})
}
module.exports = loginMobi