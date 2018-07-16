import React from 'react'
import './header.scss'
import UserInfo from './userInfo'
import SearchList from './searchList'

export default class Header extends React.Component{
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
    navPrev=(e)=>{

        this.props.navPrev()
    }
    navNext=(e)=>{
        this.props.navNext()
    }
    render(){
        let {props}=this
        let {prevEnable,nextEnable}=props
        return (<div className="app-header">
                <i className="iconfont icon-cd_icon"></i>
                <span className="app-name">音乐播放器</span>
                <span className="nav-bar">
                    {prevEnable?<span className="btn prev" onClick={this.navPrev} title="后退">&lt;</span>:<span className="btn disable prev">&lt;</span>}
                    {nextEnable?<span className="btn next" onClick={this.navNext} title="前进">&gt;</span>:<span className="btn disable next">&gt;</span>}
                </span>
                <span className="seach-bar">
                    <input placeholder="搜索音乐，视频，歌手，歌单" onChange={this.search} onFocus={this.inputFoucus}/><i className="iconfont icon-search"></i>
                    <SearchList data={props.searchSuggest}/>
                </span>
                <UserInfo data={props.userInfo} onAvaClick={this.userInfoClick}/>
        </div>)
    }
}