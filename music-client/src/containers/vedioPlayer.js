import React from 'react'
import Loadable from 'react-loadable'
const VedioPlayLodable=Loadable({
    loader:()=>import("component/vedioDetail"),
    loading:()=><span></span>
})
class VedioPlayer extends React.Component{
    render(){
        console.log(this.props)
        return <VedioPlayLodable />
    }
}
export default VedioPlayer