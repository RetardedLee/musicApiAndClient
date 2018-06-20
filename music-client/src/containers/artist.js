import React from 'react'
import Loadable from 'react-loadable'
const ArtistLodable=Loadable({
    loader:()=>import("component/artist"),
    loading:()=><span></span>
})
class Artist extends React.Component{
    render(){
        return <ArtistLodable />
    }
}
export default Artist