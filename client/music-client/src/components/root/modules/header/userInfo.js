import React from 'react'
import defAva from "static/defaultAva.jpg"
export default class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {state,props}=this
        return  <span className="user-info">
                    {
                        props.data.status===1?(<span>
                        <img className="user-avatar" src={props.data.avatarUrl} onError={(e)=>{e.target.src=defAva}}/>
                        <span className="user-name">{props.data.nickname}</span>
                    </span>):(<span onClick={this.props.onAvaClick}>
                        <img className="user-avatar" src={defAva} onError={(e)=>{e.target.src=defAva}}/>
                        <span className="user-name" >未登录</span>
                    </span>)
                    }
                    
                </span>
               
    }
}