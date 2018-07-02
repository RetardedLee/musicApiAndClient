

const express = require("express")
const log4js = require('log4js');
const app = express()
const cors = require('cors'); 
const index = require("./controllers/index")
const searchHandler = require("./controllers/search.js")
const searchHot = require("./controllers/searchHot.js")
const searchMulmatch = require("./controllers/searchMulmatch.js")
const searchSuggest = require("./controllers/searchSuggest.js")
const musicUrl = require("./controllers/musicUrl.js")
const musicDetail = require("./controllers/musicDetail.js")
const artist = require("./controllers/artist.js")
const artistDesc = require("./controllers/artistDesc.js")
const artistMv = require("./controllers/artistMv.js")
const artistAlbum = require("./controllers/artistAlbum.js")
const similarList = require("./controllers/similarList.js")
const similarSongs = require("./controllers/similarSong.js")
const similarMv = require("./controllers/similarMv.js")
const recoSongs = require("./controllers/recoSong.js")
const recoLists = require("./controllers/recoLists.js")
const topList = require("./controllers/topList.js")
const topArtist = require("./controllers/topArtist.js")
const topMv = require("./controllers/topMv.js")
const playlistHot = require("./controllers/playlistHot.js")
const playlistCat = require("./controllers/playListCat.js")
const similarArtist = require("./controllers/similarArtist.js")
const albumDetail = require("./controllers/albumDetail.js")
const artistList = require("./controllers/artistList.js")
const musicLyric = require("./controllers/musicLyric.js")
const mvFirst = require("./controllers/mvFirst.js")
const similarUser = require("./controllers/similarUser.js")
const loginMobi = require("./controllers/loginMobi.js")
const musicComment = require("./controllers/musicComment.js")
const vedioComment = require("./controllers/vedioComment.js")
const albumComment = require("./controllers/albumComment.js")
const loginEmail = require("./controllers/loginEmail.js")
const artistSub = require("./controllers/artistSub.js")
const artistUnsub = require("./controllers/artistUnsub.js")
const playlistComment = require("./controllers/playlistComment.js")
const musicLike = require("./controllers/musicLike.js")
const likeList = require("./controllers/likeList.js")
const banner = require("./controllers/banner.js")
const musicCheck = require("./controllers/musicCheck.js")
const userList = require("./controllers/userList.js")
const createList = require("./controllers/createList.js")
const playlistSub = require("./controllers/playlistSub.js")
const event = require("./controllers/event.js")
const userEvent = require("./controllers/userEvent.js")
const userDetail = require("./controllers/userDetail.js")
const userUpdate = require("./controllers/userUpdate.js")
const userFllow = require("./controllers/userFollow.js")
const userFans = require("./controllers/userFans.js")
const playlistHq = require("./controllers/playlistHq.js")
const privateCon=require("./controllers/privateCon")
const privateList=require("./controllers/privateList")
const privateMv=require("./controllers/privateMv")
const privateNew=require("./controllers/privateNew")
const getPlayList=require("./controllers/getPlayList")
const config = require("./webConfig.js")
const newAblum=require("./controllers/newAlbum")
const vedioCat=require("./controllers/vedioCat")
const vedioCatList=require("./controllers/vedioCatList")
const mvDetali =require("./controllers/mvDetail")
const playlistDetail=require("./controllers/playListDetail")
const relativeMv =require("./controllers/relativeMv")
const vedioDetail=require("./controllers/vedioDetail")
const vedioUrl=require("./controllers/vedioUrl")
log4js.configure({
    appenders: { out: { type: 'stdout', layout: { type: 'coloured' } } },
    categories: { default: { appenders: ['out'], level: 'info' } }
});
const logger = log4js.getLogger();
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
const options={
    origin: true,
    optionsSuccessStatus: 200,
    methods:['GET', 'PUT', 'POST','OPTIONS','DELETE'],
    credentials:true,
    maxAge:-1
}
app.use(cors(options));
app.get("/",index)
app.get("/search",searchHandler);
app.get("/search/multimatch",searchMulmatch);
app.get("/search/suggest",searchSuggest);
app.get("/search/hot",searchHot);
app.get("/music/url",musicUrl);
app.get("/music/comment",musicComment);
app.get("/music/detail",musicDetail);
app.get("/music/check",musicCheck);
app.get("/music/lyric",musicLyric);
app.get("/artist",artist);
app.get("/artist/album",artistAlbum);
app.get("/artist/desc",artistDesc);
app.get("/artist/mv",artistMv);
app.get("/artist/sub",artistSub);
app.get("/artist/unsub",artistUnsub);
app.get("/artist/similar",similarArtist);
app.get("/similar/playlist",similarList);
app.get("/similar/song",similarSongs);
app.get("/similar/mv",similarMv);
app.get("/similar/user",similarUser);
app.get("/recommend/song",recoSongs);
app.get("/recommend/playlist",recoLists);
app.get("/top/list",topList);
app.get("/top/artist",topArtist);
app.get("/top/mv",topMv);
app.get("/playlist/hot",playlistHot);
app.get("/playlist/cat",playlistCat);
app.get("/playlist/comment",playlistComment);
app.get("/playlist/sub",playlistSub);
app.get("/playlist/hq",playlistHq);
app.get("/album/detail",albumDetail);
app.get("/album/comment",albumComment);
app.get("/artist/list",artistList);
app.get("/mv/first",mvFirst);
app.get("/vedio/comment",vedioComment);
app.get("/login/mobi",loginMobi);
app.get("/login/email",loginEmail);
app.get("/like/get",likeList);
app.get("/banner",banner);
app.get("/user/playlist",userList);
app.get("/user/update",userUpdate);
app.get("/user/event",userEvent);
app.get("/user/detail",userDetail);
app.get("/user/follow",userFllow);
app.get("/user/fans",userFans);
app.get("/event",event);
app.get("/create/list",createList);
app.get("/private/content",privateCon)
app.get("/private/list",privateList)
app.get("/private/mv",privateMv)
app.get("/private/new",privateNew)
app.get("/playlist/list",getPlayList)
app.get("/new/album",newAblum)
app.get("/vedio/cat",vedioCat)
app.get("/vedio/catlist",vedioCatList)
app.get("/vedio/detail",vedioDetail)
app.get("/playlist/detail",playlistDetail)
app.get("/mv/relative",relativeMv)
app.get("/vedio/url",vedioUrl)
var port = config.port || 3000
app.listen(port, (server) => {
    console.info(`服务启动......端口：${port}  当前时间${new Date().toTimeString()}`)
})