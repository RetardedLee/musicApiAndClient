const DOMAIN="http://t21160v763.51mypc.cn:58383"
export default{
    public:{
        searchSuggest:`${DOMAIN}/search/suggest`,
        search:`${DOMAIN}/search`,
        loginEmail:`${DOMAIN}/loginEmail`,
        loginMobi:`${DOMAIN}/loginMobi`,
        playlist:`${DOMAIN}/user/playlist`,
        userInfo:`${DOMAIN}/banner`,
        musicUrl:`${DOMAIN}/music/url`,
        musicLyric:`${DOMAIN}/music/lyric`,
        musicInfo:`${DOMAIN}/music/detail`,
        musicComment:`${DOMAIN}/music/comment`
    },
    music:{
        recommend:{
            banner:`${DOMAIN}/banner`,
            recList:`${DOMAIN}/private/list`,
            excusive:`${DOMAIN}/private/content`,
            newTest:`${DOMAIN}/private/new`,
            recMv:`${DOMAIN}/private/mv`
        },
        playList:{
            tagList:`${DOMAIN}/playlist/list`,
            hotTag:`${DOMAIN}/playlist/hot`,
            allTag:`${DOMAIN}/playlist/cat`,
            
        },
        ranking:{
            topList:`${DOMAIN}/top/list`,
            
        },artist:{
            artistList:`${DOMAIN}/artist/list`
        },
        newTest:{
            newAlbum:`${DOMAIN}/new/album`
        }
        
    },
    vedio:{
        vedioList:`${DOMAIN}/vedio/catlist`
    },
    playList:{
        playListDetail:`${DOMAIN}/playlist/detail`,
        playListComment:`${DOMAIN}/playlist/comment`
    },
    artist:{
        artistSurvey:`${DOMAIN}/artist`,
        artistAlbum:`${DOMAIN}/artist/album`,
        artistMv:`${DOMAIN}/artist/mv`,
        artistDesc:`${DOMAIN}/artist/desc`,
        artistSimilar:`${DOMAIN}/artist/similar`,
    },
    album:{
        albumDetail:`${DOMAIN}/album/detail`,
        albumComment:`${DOMAIN}/artist/similar`
    }
}