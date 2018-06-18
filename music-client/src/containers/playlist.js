import React from 'react'
import Loadable from 'react-loadable'

const PlayListLodable=Loadable({
    loader:()=>{return import("component/playlist")},
    loading:()=><span></span>
})
class PlayList extends React.Component{
    render(){
        return <PlayListLodable />
    }
}


export default PlayList