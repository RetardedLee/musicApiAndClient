const DOMAIN="http://localhost:3000"
export default{
    public:{
        searchSuggest:`${DOMAIN}/search/suggest`,
        search:`${DOMAIN}/search`,
        loginEmail:`${DOMAIN}/loginEmail`,
        loginMobi:`${DOMAIN}/loginMobi`,
        playlist:`${DOMAIN}/user/playlist`,
        userInfo:`${DOMAIN}/banner`
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
        
    }
}