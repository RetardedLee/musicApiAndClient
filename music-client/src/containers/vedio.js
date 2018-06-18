
import React from 'react'
import Loadable from 'react-loadable'

const VedioLodable=Loadable({
    loader:()=>{return import("component/vedio")},
    loading:()=><span></span>
})
class Vedio extends React.Component{
    render(){
        console.log("路由按需加载")
        return <VedioLodable />
    }
}


export default Vedio
