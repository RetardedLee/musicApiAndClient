// playlistUpdate
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function playlistUpdate(req, res, next) {
    const playlist_id = req.query.id;
    const desc_detail = req.query.desc || "";
    const tags_detail = req.query.tags || "";
    const name_detail = req.query.name;
    const data = {
        "/api/playlist/desc/update": '{"id":' + playlist_id + ',"desc":"' + desc_detail + '"}',
        "/api/playlist/tags/update": '{"id":' + playlist_id + ',"tags":"' + tags_detail + '"}',
        "/api/playlist/update/name": '{"id":' + playlist_id + ',"name":"' + name_detail + '"}',
        csrf_token: ""
    };
    sendRequest(cloudPath.playlistUpdate, data, req, res)
}
module.exports = playlistUpdate