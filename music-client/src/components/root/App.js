
import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './modules/header/header'
import Menu from './modules/menu/menu'
import Player from './modules/player/player';
import './App.scss';
class App extends Component {
    componentDidMount(){
        this.props.loginRefreshAction()
    }
    commentPageChange=(e)=>{

    }
    searchHandler=(keywords)=>{
        this.props.searchAction(keywords)
    }
    userInfoClick=()=>{
        console.log("登录框")
    }
    playMusic=(id)=>{
        this.props.musicUrlAction({id})
        this.props.musicLyricAction({id})
        this.props.musicInfoAction({index:id})
    }
    getComment=(id,offset,limit=20)=>{
        this.props.musicCommentAction({id,offset,limit})
    }
    navPrev=(e)=>{
        console.log(this.props.history.index)
        this.props.history.goBack()    
    
    }
    navNext=(e)=>{
        console.log(this.props.history.index)
        this.props.history.goForward()
    }
    render() {
        let {props}=this
        let {index,length}=props.history
        return (
                <div className = "music-app">
                    <Header 
                        searchSuggest={props.public.searchSuggest} 
                        userInfo={props.public.userInfo} 
                        searchHandler={this.searchHandler} 
                        userInfoClick={this.userInfoClick}
                        navPrev={this.navPrev}
                        navNext={this.navNext}
                        prevEnable={ index !== 0 }
                        nextEnable={index !== length-1}
                        />
                    <Menu login={props.public.userInfo} show={props.public.showMenu}/>
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