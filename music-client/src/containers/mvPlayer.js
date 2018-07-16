import React from 'react'
import Loadable from 'react-loadable'
const MvPlayLodable=Loadable({
    loader:()=>import("component/mvDetail"),
    loading:()=><span></span>
})
class MvPlay extends React.Component{
    render(){
        return <MvPlayLodable />
    }
}
export default MvPlay