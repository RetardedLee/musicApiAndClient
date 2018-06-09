
import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config'
import {withRouter} from 'react-router-dom'
import Header from './modules/header/header'
import Menu from './modules/menu/menu'
import Player from './modules/player/player';
import './App.scss';
class App extends Component {
    componentDidMount(){
        this.props.userInfoAction().then((response)=>{
            if(response.payload.status===1 && response.payload.content != null){
                let uid=response.payload.content.userId
                this.props.playListAction(uid)
            }
        })
    }
    searchHandler=(keywords)=>{
        this.props.searchAction(keywords)
    }
    userInfoClick=()=>{
        console.log(1)
    }
    render() {
        let {props,state}=this
        console.log(props)
        return (
                <div className = "music-app">
                    <Header searchSuggest={props.public.searchSuggest} login={props.public.login} searchHandler={this.searchHandler} userInfoClick={this.userInfoClick}/>
                    <Menu login={props.public.login}/>
                    <div className="app-main">
                        {renderRoutes(props.route.routes)}
                    </div>
                    <Player />
                </div>
            );
    }
}

export default App;