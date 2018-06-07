var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function searchSuggest(req, res, next) {
    const data = {
        s: req.query.keywords
    };
    sendRequest(cloudPath.searchSuggest, data, req, res)
}
module.exports = searchSuggest