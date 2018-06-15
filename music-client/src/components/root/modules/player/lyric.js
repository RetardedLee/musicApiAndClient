import React from 'react'
import Lyric from 'lyric-parser'
export default class LyricView extends React.Component{
    constructor(props){
        super(props)

        this.line=0
    }
    render(){
        let {lyric,time}=this.props
        let lyricParsed=null
        var transY=0
        if(this.line > 4){
            transY=(this.line-4)*30
        }
        if(lyric.status==1){
            lyricParsed=new Lyric(lyric.content,()=>{})
        }
    return (lyricParsed===null?(<p style={{textAlign:"center",lineHeight:"400px"}}>暂无歌词哦~</p>):(<div className="lyric">
        <ul style={{transform:`translate(0,-${transY}px)`}}>
            {lyricParsed.lines.map((value,key)=>{
                var current=false
                if(key < lyricParsed.lines.length-1){
                    if(time>=value.time && time < lyricParsed.lines[key+1].time){
                        current=true
                        this.line=key
                    }else{
                        current=false
                    }
                }else{
                    if(time>=value.time){current=true 
                        this.line=lyricParsed.lines.length
                    } 
                    else current=false
                }
              return <li className={`line ${current?"current":""}`} key={key}>{value.txt}</li>
            })}
        </ul>
      </div>))
    }
}