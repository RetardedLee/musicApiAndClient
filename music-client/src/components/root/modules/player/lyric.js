import React from 'react'
import Lyric from 'lyric-parser'
export default class LyricView extends React.Component{
    constructor(props){
        super(props)
        this.dom=null
        this.line=0
    }
    componentDidMount(){
        this.dom.scrollIntoView(true)
    }
    componentDidUpdate(){
        console.log(this.dom)
        this.dom.scrollTo({top:"100px"})
        if(this.line > 5){
            this.dom.scrollTo({top:(this.line-5)*40})
            
        }
       
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
    return (lyricParsed===null?(<p>暂无歌词哦~</p>):(<div className="lyric">
        <ul ref={ins=>{this.dom=ins}} style={{transform:`translate(0,-${transY}px)`}}>
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