const request = require("request");
const Encrypt = require("./crypto.js");
const querystring = require("querystring");
request.debug=true
function sendRequest(path, data, requestByClient, responseByNode, succCallback, errorCallback) {
    const cookie = requestByClient.get('Cookie') ? requestByClient.get('Cookie') : ''
    const UA = requestByClient.get("User-Agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586"
    let csrf_token=""
    if(cookie.match(/_csrf=[^(;|$)]+;/g)){
        csrf_token = cookie.match(/_csrf=[^(;|$)]+/g)[0].slice(6)
    }
    const param={...data,csrf_token}
    const cryptoreq = Encrypt(param);
    const options = {
        url: `http://music.163.com${path}`,
        method: 'POST',
        headers: {
            Accept: "*/*",
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "http://music.163.com",
            Host: "music.163.com",
            "User-Agent": UA,
            Cookie: cookie
        },
        body: querystring.stringify({
            params: cryptoreq.params,
            encSecKey: cryptoreq.encSecKey
        })
    };
    request(options, function(error, res, body) {
        console.log(res)
        if (error) {
            responseByNode.status({
                status: 500,
                content: null
            })
            if (errorCallback) {
                errorCallback(error);
            }
        } else {
            let cookie = res.headers["set-cookie"]
            if (Array.isArray(cookie)) {
                cookie = cookie.map((v, i) => { var rt = v.replace(" Domain=.music.163.com", ""); return rt })
                responseByNode.setHeader("Set-Cookie", cookie)
            }
            // console.log(res)
            responseByNode.json(JSON.parse(body))
            if (succCallback) {
                succCallback(body);
            }
        }
    });
}
module.exports = sendRequest