
const request=require('request')
const url = require("url");
module.exports = (req, res) => {
    const reqUrl=req.query.target
    const host=url.parse(reqUrl).hostname
    const ifRange=req.headers["If-Range"]
    const range=req.headers["Range"]
    const UA=req.headers["User-Agent"]
    const headers={
        "Cache-Control": "max-age=0",
        Host: host,
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": UA,
        "If-Range":ifRange,
        Range:range
    }
    
    const options={
        headers,
        url:reqUrl
    }
    request(options)
      .on("error", err => {
        res.send({ err });
      }).pipe(res).on("response",function(rs){
          //
      })
  };