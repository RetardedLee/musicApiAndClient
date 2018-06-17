// userUpdate
const cloudPath = require("../cloudPath.js")
const request = require("request");
const vedioConfig =require('../dataConfig/vedioParamMap.js') 
function vedioCatList(req, responseByNode, next) {
    let page=req.query.page || 1
    let cat=req.query.cat || "5100"
    let catParam=vedioConfig[cat].params[page]
    let csrf_token=""
    let hasmore=true
    const cookie = req.get('Cookie') ? req.get('Cookie') : 'os=pc; deviceId=AC8E35F47E0E3FA67BD3264B3F4F099E0583CCC4D05099715F93; osver=Microsoft-Windows-7-Ultimate-Edition-Service-Pack-1-build-7601-64bit; appver=2.4.0.196505; MUSIC_A=210cceabc19173d6bd88a51fa521dbe40b5cd8d8f56104538ee8e599b672e28e95c0c300baea6408de5768fbb7603d7ef4f1a55f851c6d9924106703464d62c0d7c4ee88d69498fae397afb15b0dac7a9d659ea96957691476f7368052807d52bf122d59fa1ed6a2; channel=netease; MUSIC_U=9afc50606640023acaa1d6ed9484c694c108145b7bf14f79377a7f5ebdd29ef8d8b1996147ac204b0984a04648573e7577749c2dda21047b; __remember_me=true; __csrf=8ea93ce796718c1ca7d8bf11202c1b58'
         //5100音乐 8100showtime 1000MV 3102二次元  1101舞蹈  2103游戏
    
   
    if(cookie.match(/_csrf=[^(;|$)]+;/g)){
        csrf_token = cookie.match(/_csrf=[^(;|$)]+/g)[0].slice(6)
    }
    const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586"
    const options = {
        url: `https://music.163.com/eapi/videotimeline/videogroup/otherclient/get?csrf_token=${csrf_token}`,
        gzip:true,
        method: 'POST',
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-us,en;q=0.9",
            Cookie: cookie,
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "http://music.163.com",
            Host: `music.163.com`,
            "User-Agent": UA
        },
        body: `params=${catParam}`
    };
    if(Number(page) > vedioConfig[cat].total-1){
        hasmore=false
        responseByNode.json({
            content:null,
            code:200
        })
    }else{
        if(Number(page) == vedioConfig[cat].total-1){hasmore=false}
        request(options, function(error, res, body) {
            if (error) {
                responseByNode.status({
                    status: 500,
                    content: null
                })
               /*  if (errorCallback) {
                    errorCallback(error);
                } */
            } else {
                let cookie = res.headers["set-cookie"]
                if (Array.isArray(cookie)) {
                    cookie = cookie.map((v, i) => { var rt = v.replace(" Domain=.music.163.com", ""); return rt })
                    responseByNode.setHeader("Set-Cookie", cookie)
                }
                var res=JSON.parse(body)
                res.hasmore=hasmore
                responseByNode.json(res)
               /*  if (succCallback) {
                    succCallback(body);
                } */
            }
        });
    }
    
   
}
module.exports = vedioCatList
