// userUpdate
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function userUpdate(req, res, next) {
    // gender为0表示保密，1为男性，2为女性
    const gender_type = req.query.gender;
    // birthday 为unix13位时间戳
    // province_number and city_number
    const data = {
        avatarImgId: "0",
        birthday: req.query.birthday,
        city: req.query.city,
        gender: gender_type,
        nickname: req.query.nickname,
        province: req.query.province,
        signature: req.query.signature
    };
    sendRequest(`${cloudPath.userUpdate}`, data, req, res)
}
module.exports = userUpdate