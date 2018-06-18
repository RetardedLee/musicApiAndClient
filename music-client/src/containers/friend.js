import React from 'react'
import Loadable from 'react-loadable'
const FriendLodable=Loadable({
    loader:()=>import("component/friend"),
    loading:()=><span></span>
})
class Friend extends React.Component{
    render(){
        console.log(this.props)
        return <FriendLodable />
    }
}
export default Friend