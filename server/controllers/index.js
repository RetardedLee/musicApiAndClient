const path = require('path')
const config = require("../webConfig.js")
console.log(config)

function index(req, res, next) {
    var options = {
        headers: {
            "Content-Type": "text/html;"
        }
    }
    res.sendFile(path.resolve("./static/index.html"), options)
}
module.exports = index