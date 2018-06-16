import React from 'react'
import Loadable from 'react-loadable'
const MusicLodable=Loadable({
    loader:()=>{return import("component/music")},
    loading:()=><span></span>
})
class Music extends React.Component{
    render(){
        return <MusicLodable />
    }
}
export default Music