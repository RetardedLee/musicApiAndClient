const request = require("request")
const cheerio=require("cheerio")
const util=require("../util.js")
function userInfo(req, res, next) {
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    console.log("cookie")
    const options = {
        url: "http://music.163.com/discover",
        method: "GET",
        headers: {
            Host: "music.163.com",
            Referer: "https://music.163.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3380.0 Safari/537.36"
        },
        cookie:cookie
    };
    request(options, ( body) => { 
            console.log(body)
            try {
                const $=cheerio.load(body)
                eval($("script")["0"].children[0].data.split("window.NEJ_CONF")[0])

                if(util.isEmptyObject(GUser)){
                    res.json({code:200,userInfo:null});    
                }else{
                    res.json({code:200,userInfo:GUser});
                }
            } catch (error) {
                console.log(error)
                res.status(500).send({code:500,content:null});
            }
        })
}
module.exports = userInfo