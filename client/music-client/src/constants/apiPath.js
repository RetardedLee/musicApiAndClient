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
            recList:`${DOMAIN}/recommend/playlist`
        }
        
    }
}