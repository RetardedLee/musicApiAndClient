// userUpdate
const cloudPath = require("../cloudPath.js")
const request = require("request");
const Encrypt = require("../crypto.js");
const querystring = require("querystring");
function vedioCat(req, responseByNode, next,data={}) {
    let csrf_token=""
    const cookie = "os=pc; deviceId=AC8E35F47E0E3FA67BD3264B3F4F099E0583CCC4D05099715F93; osver=Microsoft-Windows-7-Ultimate-Edition-Service-Pack-1-build-7601-64bit; appver=2.4.0.196505; MUSIC_A=210cceabc19173d6bd88a51fa521dbe40b5cd8d8f56104538ee8e599b672e28e95c0c300baea6408de5768fbb7603d7ef4f1a55f851c6d9924106703464d62c0d7c4ee88d69498fae397afb15b0dac7a9d659ea96957691476f7368052807d52bf122d59fa1ed6a2; channel=netease; MUSIC_U=9afc50606640023acaa1d6ed9484c694c108145b7bf14f79377a7f5ebdd29ef8d8b1996147ac204b0984a04648573e7577749c2dda21047b; __remember_me=true; __csrf=8ea93ce796718c1ca7d8bf11202c1b58"
    if(cookie.match(/_csrf=[^(;|$)]+;/g)){
        csrf_token = cookie.match(/_csrf=[^(;|$)]+/g)[0].slice(6)
    }
    console.log(csrf_token,"sc")
    const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586"
    const param={...data,csrf_token}
    const cryptoreq = Encrypt(param);
    const options = {
        url: `https://music.163.com/eapi/cloudvideo/category/list`,
        gzip:true,
        method: 'POST',
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-us,en;q=0.9",
            Cookie: "os=pc; deviceId=AC8E35F47E0E3FA67BD3264B3F4F099E0583CCC4D05099715F93; osver=Microsoft-Windows-7-Ultimate-Edition-Service-Pack-1-build-7601-64bit; appver=2.4.0.196505; MUSIC_A=210cceabc19173d6bd88a51fa521dbe40b5cd8d8f56104538ee8e599b672e28e95c0c300baea6408de5768fbb7603d7ef4f1a55f851c6d9924106703464d62c0d7c4ee88d69498fae397afb15b0dac7a9d659ea96957691476f7368052807d52bf122d59fa1ed6a2; __csrf=30bd965bae6e518c347d1e74aff035c0; channel=netease",
            "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: "http://music.163.com",
            Host: `music.163.com`,
            "User-Agent": UA
        },
        body: `params=12302B8F1EEF30937AE703010DC161D2E640955DE785D9559A14B0A9C687B9EF5634F366C66B768CCD92CADE28A71BD46C5CCBF1E2DA294023835D5F5625B9DC1515042338FCD5E450785B945AE4DF0D297D8E309C8BD13F444BB2E2DF617B47F1F8FEFEDD860826CF84CD1E9DE81B6DE40B093E9343E5CD27EB5D01AB6F784F410F28883ECE0F21524DEB55AF4830FFCB7D9C6282E9DDFE63EBD61553EABB63092BDD1EB66EE53C61273478E5CCA9F25A45DEDFDBE9820A9E3FE3C071E4EF0727AEC6D5815C9CECDF2678400EF29B210CB658759DC475D866E736803D53197D6FAF568917E8402FDA6E6FC261AB1BCF574346A22C79B4F87FFD8D4D55A6E6BB481033D44D9215F31EEDCDAF13489658BADD59B8A4B900F15670B574DBA8FA7B7D0E9FC30F07666FB0DC424B67EC188440CDB709E203E339CB8145CCD33233AB20DFA00017CC797EDE8D2219114039F15273257F24902694F11B692F2D17172C0EF2EC4577330CCBC6EA3047A8D501AC286C1641FBFAA1CB1C1E71FCA178BF339CA3F4CDB34B8E75CCCCCC148E7212DFDD5EF02C7D76678B4B576302ADF56C2C7706442619E2BD68B0ED55A2C2BFE08FE0BD77EB8CDE1E1F127FD867B51115DE4BE35BD1FE280CE90BBFE433421C3E2A3BDD51FB66DA254510B362239E8D99D72B5AFC8CC75A4C741716E1A43130676B4D35B523C79E80D717FFA81AE46AA4ECC5EE3F0439AC4F49167D25415058A933B6084EA6EA901915F28962288BBCACEC21D8A73859A9DD060008E6E93EB7E1F0CA5E2213972592C9D1073D67A7530F158C847683D57BA19F73A476553F0AF09D78DAEA59DF8B4D2AAA5B0FD8C9C2C7BCF1089107808D7028DE1DEA0BD5927222`
    };
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
            let cookie = res.headers
            console.log(cookie)
            if (Array.isArray(cookie)) {
                cookie = cookie.map((v, i) => { var rt = v.replace(" Domain=.music.163.com", ""); return rt })
                responseByNode.setHeader("Set-Cookie", cookie)
            }
            console.log(cryptoreq.params)
            responseByNode.send(res.body)
           /*  if (succCallback) {
                succCallback(body);
            } */
        }
    });
}
module.exports = vedioCat
