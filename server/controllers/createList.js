// createList
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function createList(req, res, next) {
    const data = {
        name: req.query.name
    };
    console.log(data)
    sendRequest(cloudPath.createList, data, req, res)
}
module.exports = createList