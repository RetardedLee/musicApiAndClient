
import React from 'react'
import Loadable from 'react-loadable'

const UserLodable=Loadable({
    loader:()=>{return import("component/user")},
    loading:()=><span></span>
})
class User extends React.Component{
    render(){
        console.log("路由按需加载")
        return <UserLodable />
    }
}


export default User
