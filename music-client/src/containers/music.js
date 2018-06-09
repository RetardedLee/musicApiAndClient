import React from 'react'
import Loadable from 'react-loadable'
import {injectReducer} from 'store/store'
import reducers from 'reducer/music'
injectReducer("music",reducers)
const MusicLodable=Loadable({
    loader:()=>import("component/music"),
    loading:()=><span></span>
})
class Music extends React.Component{
    render(){
        return <MusicLodable />
    }
}

export default Music