
import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './modules/header/header'
import Menu from './modules/menu/menu'
import Player from './modules/player/player';
import './App.scss';
class App extends Component {
    componentDidMount(){
        this.props.userInfoAction().then((response)=>{
            if(response.code===200 && response.userInfo != null){
                 let uid=response.payload.content.userId
                this.props.playListAction(uid)
            }
        })
    }
    commentPageChange=(e)=>{

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
    getComment=(id,offset,limit=20)=>{
        this.props.musicCommentAction({id,offset,limit})
    }
    render() {
        let {props,state}=this
        return (
                <div className = "music-app">
                    <Header 
                        searchSuggest={props.public.searchSuggest} 
                        login={props.public.login} 
                        searchHandler={this.searchHandler} 
                        userInfoClick={this.userInfoClick}/>
                    <Menu login={props.public.login} show={props.public.showMenu}/>
                    <div className="app-main" style={{width:props.public.showMenu?800:"100%"}}>
                        {renderRoutes(props.route.routes)}
                    </div>
                    <Player
                        show={props.public.showMenu} 
                        musicUrl={props.public.musicUrl} 
                        musicInfo={props.public.musicInfo} 
                        musicLyric={props.public.musicLyric} 
                        getComment={this.getComment} 
                        musicComment={props.public.musicComment}/>
                </div>
            );
    }
}

export default App;