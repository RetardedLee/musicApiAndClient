import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/user'
import UserSurvery from './modules/userSurvery'
import UserSubscribe from './modules/userSubcribe'
import UserPlaylist from './modules/userPlaylist'
import LoadingInfo from 'component/common/LoadingInfo'
import "./index.scss"
 class User extends React.Component{
     constructor(props){
         super(props)
         this.id=props.match.params.id
     }
     componentDidMount(){
         this.props.userSurveryAction({id:this.id})
         this.props.userSubscribeAction({id:this.id})
         this.props.showMenuAction(true)
     }
    render(){
       let {props,state}=this
       console.log(props)
        return <div className="user-detail">
                <LoadingInfo 
                        status={props.user.userSubvery.status} 
                        component={<UserSurvery 
                                        data={props.user.userSubvery.content}/>}/>
                <div className="playlist">
                <h2>歌单</h2>
                <LoadingInfo status={props.user.userPlaylist.status} component={<UserPlaylist data={props.user.userPlaylist.content}/>}/>
                </div>
                {<div className="subscribe">
                <h2>收藏</h2>
                <LoadingInfo status={props.user.userSubscribe.status} component={<UserSubscribe data={props.user.userSubscribe.content}/>}/>
                </div>}
        </div>
    }
}
export default createContainer(withRouter(User),"user",actions)