import React from 'react'
import Loadable from 'react-loadable'
const MvPlayLodable=Loadable({
    loader:()=>import("component/vedioDetail"),
    loading:()=><span></span>
})
class VedioPlayer extends React.Component{
    render(){
        return <MvPlayLodable />
    }
}
export default MvPlayLodable