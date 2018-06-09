// getPlayList
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function getPlayList(req, res, next) {
    const data = {
        cat: req.query.cat || "全部",
        order: req.query.order || "hot",
        offset: req.query.offset || 0,
        total: true,
        limit: req.query.limit || 50
      };
    sendRequest(cloudPath.getPlayList, data, req, res)
}
module.exports = getPlayList