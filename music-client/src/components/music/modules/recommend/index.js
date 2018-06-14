import React from 'react'
import Carousel from './carousel'
import RecList from './recList'
import Exclusive from './exclusive'
import RecMv from './recMv'
import NewTest from './newtest'
export default class Recommend extends React.Component{
    playMusic=(e)=>{
        this.props.urlAction({id:e.id})
        this.props.lyricAction({id:e.id})
        this.props.infoAction(e)
        console.log(this.props.lyricAction)
        console.log(e)
    }
    render(){
        let {state,props}=this
        
        return <div className="recommend">
            <Carousel data={props.data.banner}/>
            <h2 className="title mb15">推荐歌单</h2>
            <RecList data={props.data.recList}/>
            <h2 className="title mb15">独家放送</h2>
            <Exclusive data={props.data.excusive}/>
            <h2 className="title mb15">最新音乐</h2>
            <NewTest data={props.data.newTest} playMusic={this.playMusic} musicInfo={props.musicInfo}/>
            <h2 className="title mb15">推荐mv</h2>
            <RecMv data={props.data.recMv}/>
        </div>
    }
}