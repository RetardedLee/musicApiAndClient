import React from 'react'
import ArtistTag from './artistTag'
export default class Artist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tag:0,
            language:0,
            filter:1
        }
    }
    onChage=(a,b)=>{
        this.setState({
            [a]:b
        },()=>{
            let {state}=this
            let tag=`${state.language}${state.tag}`
            let initial=`${state.filter}`
            let ops={}
            if(tag==="00"){
                //调用热门歌手接口
                ops={}
            }else{
                // 调用分类歌手
                ops={
                    tag:tag,
                    initial:initial
                }
            }
            console.log(ops)
        })
    }
    render(){
        return <div className="artist">
            <ArtistTag onChange={this.onChage}/>
        </div>
    }
}