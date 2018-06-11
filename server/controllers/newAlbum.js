// newAblum
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function newAblum(req, res, next) {
    const data = {
        offset: req.query.offset || 0,
        total: true,
        limit: req.query.limit || 50,
        area: req.query.area
      };
    sendRequest(`${cloudPath.newAlbum}`, data, req, res)
}
module.exports = newAblum