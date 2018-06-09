import React from 'react'
import Carousel from './carousel'
import RecList from './recList'
import Exclusive from './exclusive'
import RecMv from './recMv'
export default class Recommend extends React.Component{

    render(){
        let {state,props}=this
        console.log(props)
        return <div className="recommend">
            <Carousel data={props.data.banner}/>
            <h2 className="title mb15">推荐歌单</h2>
            <RecList data={props.data.recList}/>
            <h2 className="title mb15">独家放送</h2>
            <Exclusive data={props.data.excusive}/>
            <h2 className="title mb15">最新音乐</h2>
            <h2 className="title mb15">推荐mv</h2>
            <RecMv data={props.data.recMv}/>
        </div>
    }
}