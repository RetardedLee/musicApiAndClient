const request = require("request")
const cheerio=require("cheerio")
const util=require("../util.js")
function banner(req, res, next) {
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const options = {
        url: "http://music.163.com/api/v2/banner/get",
        method: "GET",
        headers: {
            Referer: "http://music.163.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3380.0 Safari/537.36",
            "Upgrade-Insecure-Requests": 1
        },
        cookie:cookie
    };
    request(options, (error, response, body) => {
        if (error) {
            res.status(502).json({content:null,code:500});
        } else {
            res.json(JSON.parse(response.body));
            
            /* try {
                const bannerPattern = /<script[^>]*>\s*window\.Gbanners\s*=\s*([^;]+?);\s*<\/script>/g;
                const banners = eval(bannerPattern.exec(body)[1]);
                const $=cheerio.load(body)
                eval($("script")["0"].children[0].data.split("window.NEJ_CONF")[0])
                if(util.isEmptyObject(GUser)){
                    res.json({code:200,banners:banners,userInfo:null});    
                }else{
                    res.json({code:200,banners:banners,userInfo:GUser});
                }
            } catch (error) {
                res.status(500).send({code:500,content:null});
            } */
        }
    });
}
module.exports = banner