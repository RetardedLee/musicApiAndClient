import React from 'react'
import './header.scss'
import UserInfo from './userInfo'
import SearchList from './searchList'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    search=(e)=>{
        var s=e.target.value
        this.props.searchHandler({keywords:s})        
    }
    inputBlur=(e)=>{
        if(e.target.value.trim()){
            this.props.searchHandler({keywords:"           "})
        }
    }
    inputFoucus=(e)=>{
        if(e.target.value.trim()){
            this.props.searchHandler({keywords:e.target.value})
        }
        
    }
    userInfoClick=(e)=>{
        this.props.userInfoClick()
    }
    render(){
        let {state,props}=this
        return (<div className="app-header">
                <i className="iconfont icon-cd_icon"></i>
                <span className="app-name">音乐播放器</span>
                <span className="seach-bar">
                    <input placeholder="搜索音乐，视频，歌手，歌单" onChange={this.search} onBlur={this.inputBlur} onFocus={this.inputFoucus}/><i className="iconfont icon-search"></i>
                    <SearchList data={props.searchSuggest}/>
                </span>
                <UserInfo data={props.login} onAvaClick={this.userInfoClick}/>
        </div>)
    }
}