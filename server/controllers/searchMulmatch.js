var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function searchMulmatch(req, res, next) {
    const data = {
        s: req.query.keywords || ''
    };
    sendRequest(cloudPath.searchMulmatch, data, req, res)
}
module.exports = searchMulmatch