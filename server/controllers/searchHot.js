var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function searchHot(req, res, next) {
    const data = {
        type: 1111
    };
    sendRequest(cloudPath.searchHot, data, req, res)
}
module.exports = searchHot