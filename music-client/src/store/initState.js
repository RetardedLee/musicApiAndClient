import { createStore } from 'redux'
// 大部分初始状态是相同的 ，但是为了后期可扩展，还是写出来
export default{
    public:{
        searchSuggest:{
            content:null,
            status:0
        },
        login:{
            content:null,
            status:0
        },
        playList:{
            content:null,
            status:0
        }
        
    },
    music:{
        recommend:{
            recList:{
                content:null,
                status:0
            },
            banner:{
                content:null,
                status:0
            },
            newTest:{
                content:null,
                status:0
            },
            recMv:{
                content:null,
                status:0
            },
            excusive:{
                content:null,
                status:0
            }
        },
        playList:{
            allTag:{
                content:null,
                status:0
            },
            hotTag:{
                content:null,
                status:0
            },
            tagList:{
                content:null,
                status:0
            }
        },
        ranking:{

        },
        artist:{

        },
        newest:{

        },
        
    },
    vedio:{
        vedio:{

        },
        mv:{
            
        }
    },
    friend:{

    }
}
