
import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './modules/header/header'
import Menu from './modules/menu/menu'
import Player from './modules/player/player';
import './App.scss';
class App extends Component {
    componentDidMount(){
        this.props.userInfoAction().then((response)=>{
            console.log(response)
            if(response.code===200 && response.userInfo != null){
                 let uid=response.payload.content.userId
                this.props.playListAction(uid)
            }
        })
    }
    searchHandler=(keywords)=>{
        this.props.searchAction(keywords)
    }
    userInfoClick=()=>{
    }
    playMusic=(id)=>{
        this.props.musicUrlAction({id})
        this.props.musicLyricAction({id})
        this.props.musicInfoAction({index:id})
    }
    getComment=(id)=>{
        this.props.musicCommentAction({id})
    }
    render() {
        let {props,state}=this
        return (
                <div className = "music-app">
                    <Header searchSuggest={props.public.searchSuggest} login={props.public.login} searchHandler={this.searchHandler} userInfoClick={this.userInfoClick}/>
                    <Menu login={props.public.login}/>
                    <div className="app-main">
                        {renderRoutes(props.route.routes)}
                    </div>
                    <Player musicUrl={props.public.musicUrl} musicInfo={props.public.musicInfo} musicLyric={props.public.musicLyric} getComment={this.getComment} musicComment={props.public.musicComment}/>
                </div>
            );
    }
}

export default App;