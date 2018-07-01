module.exports = {
    //搜索
    search: "/weapi/cloudsearch/get/web",
    //热搜
    searchHot: "/weapi/search/hot",
    searchSuggest: "/weapi/search/suggest/web",
    searchMulmatch: "/weapi/search/suggest/multimatch",
    musicUrl: "/weapi/song/enhance/player/url",
    // 音乐详情
    musicDetail: "/weapi/v3/song/detail",
    // 歌词
    musicLyric: "/weapi/song/lyric",
    //版权检测
    musicCheck: "/weapi/song/enhance/player/url",
    //喜欢歌曲
    musicLike: "/weapi/radio/like",
    // 音乐评论
    musicComment: "/weapi/v1/resource/comments/R_SO_4_",
    artist: "/weapi/v1/artist",
    artistDesc: "/weapi/artist/introduction",
    artistMv: "/weapi/artist/mvs",
    artistAlbum: "/weapi/artist/albums",
    //歌手分类
    // 入驻歌手 5001
    // 华语男歌手 1001
    // 华语女歌手 1002
    // 华语组合/乐队 1003
    // 欧美男歌手 2001
    // 欧美女歌手 2002
    // 欧美组合/乐队 2003
    // 日本男歌手 6001
    // 日本女歌手 6002
    // 日本组合/乐队 6003
    // 韩国男歌手 7001
    // 韩国女歌手 7002
    // 韩国组合/乐队 7003
    // 其他男歌手 4001
    // 其他女歌手 4002
    // 其他组合/乐队 4003
    artistList: "/weapi/artist/list",
    // 相似歌手
    similarArtist: "/weapi/discovery/simiArtist",
    //相似歌单
    similarList: "/weapi/discovery/simiPlaylist",
    //相似歌曲
    similarSongs: "/weapi/v1/discovery/simiSong",
    // 相似mv
    similarMv: "/weapi/discovery/simiMV",
    // 相似关注用户
    similarUser: "/weapi/discovery/simiUser",
    // 歌单内列表
    playListDetail: "/weapi/v3/playlist/detail",
    // 每日推荐歌曲
    recoSongs: "/weapi/v1/discovery/recommend/songs",
    // 每日推荐歌单
    recoLists: "/weapi/v1/discovery/recommend/resource",
    //歌手排行
    topArtist: "/weapi/artist/top",
    // 分类排行榜（网络原创榜等）
    topList: "/weapi/v3/playlist/detail",
    // mv排行
    topMv: "/weapi/mv/toplist",
    //热门歌单分类(华语、流星等)
    playlistHot: "/weapi/playlist/hottags",
    // 全部歌单分类
    playlistCat: "/weapi/playlist/catalogue",
    //歌单评论
    playlistComment: "/weapi/v1/resource/comments/A_PL_0_",
    // 专辑内容
    albumDetail: "/weapi/v1/album",
    //专辑评论
    albumComment: "/weapi/v1/resource/comments/R_AL_3_",
    // 最新mv
    mvFirst: "/weapi/mv/first",
    // mv详情
    mvDetail: "/weapi/mv/detail",
    //mv评论
    mvComment: "/weapi/v1/resource/comments/R_MV_5_",
    // 手机登录
    loginMobi: "/weapi/login/cellphone",
    //邮箱登录
    loginEmail: "/weapi/login",
    // 登录刷新
    loginRefresh: "/weapi/login/token/refresh",
    // 收藏歌手
    artistSub: "/weapi/artist/sub",
    // 取消收藏歌手
    artistUnsub: "/weapi/artist/unsub",
    //收藏/取消收藏歌单
    playlistSub: "/weapi/playlist/",
    //喜欢列表
    likeList: "/weapi/song/like/get",
    // 用户歌单
    userList: "/weapi/user/playlist",
    //用户动态
    userEvent: "/weapi/event/get/",
    //用户信息
    userDetail: "/weapi/v1/user/detail/",
    //新建歌单
    createList: "/weapi/playlist/create",
    //获取动态
    event: "/weapi/v1/event/get",
    // 更新信息
    userUpdate: "/weapi/user/profile/update",
    // 赞评论
    commentLike: "/weapi/v1/comment",
    // 更新歌单
    playlistUpdate: "/weapi/batch",
    // 播放历史
    userRecord: "/weapi/v1/play/record",
    // 用户关注列表
    userFollow: "/weapi/user/getfollows",
    //获取粉丝
    userFans: "/weapi/user/getfolloweds",
    // 精品歌单
    playlistHq: "/weapi/playlist/highquality/list",
    //独家放送
    privateCon:"/weapi/personalized/privatecontent",
    // 推荐歌单
    privateList:"/weapi/personalized/playlist",
    // 推荐mv
    privateMv:"/weapi/personalized/mv",

    // 推荐新音乐
    privateNew:"/weapi/personalized/newsong",
    //获取分类下歌单列表
    getPlayList:"/weapi/playlist/list",
    // 新碟上架
    newAlbum:"/weapi/album/new",
    // 视频分类
    vedioCat:"https://interface.music.163.com/eapi/cloudvideo/category/list",
    // 相关推荐mv
    relativeMv:"/weapi/cloudvideo/v1/allvideo/rcmd"
}

/* 
    //签到
    app.use("/daily_signin", require("./router/daily_signin"));

    //播放 mv
    app.use("/mv/url", require("./router/mv_url"));
    //推荐歌单
    app.use("/personalized", require("./router/personalized"));

    //推荐新音乐
    app.use("/personalized/newsong", require("./router/personalized_newsong"));

    //推荐mv
    app.use("/personalized/mv", require("./router/personalized_mv"));

    //收藏单曲到歌单,从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
    app.use("/playlist/tracks", require("./router/playlist_tracks"));
    // 新碟上架 http://music.163.com/#/discover/album/
    app.use("/top/album", require("./router/top_album"));


    
    app.use("/user/subcount", require("./router/user_subcount"));

   

    app.use("/send/text", require("./router/send_text"));

    app.use("/send/playlist", require("./router/send_playlist"));

    app.use("/playlist/update", require("./router/playlist_update")); */