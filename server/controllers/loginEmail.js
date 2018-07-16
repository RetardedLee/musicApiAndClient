// loginEmail
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")
const crypto = require("crypto");

function loginEmail(req, res, next) {
    const email = req.body.email
    const md5sum = crypto.createHash("md5");
    md5sum.update(req.body.password)
    const data = {
        email: email,
        password: md5sum.digest("hex"),
        rememberLogin: true,
        clientToken: '1_jVUMqWEPke0/1/Vu56xCmJpo5vP1grjn_SOVVDzOc78w8OKLVZ2JH7IfkjSXqgfmh'
    };
    sendRequest(cloudPath.loginEmail, data, req, res, (body) => {})
}
module.exports = loginEmail