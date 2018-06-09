import React from 'react'
import Carousel from './carousel'
import RecList from './recList'
export default class Recommend extends React.Component{

    render(){
        let {state,props}=this
        console.log(props)
        return <div className="recommend">
            <Carousel data={props.data.banner}/>
            <h2 className="title mb15">推荐歌单</h2>
            <RecList data={props.data.recList}/>
        </div>
    }
}