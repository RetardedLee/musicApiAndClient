import React from 'react'
import Loadable from 'react-loadable'
const AlbumLodable=Loadable({
    loader:()=>import("component/album"),
    loading:()=><span></span>
})
class Album extends React.Component{
    render(){
        return <AlbumLodable />
    }
}
export default Album