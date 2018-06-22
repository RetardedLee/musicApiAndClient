import React from 'react'
export default class ArtistDetail extends React.Component{
     constructor(props){
         super(props)
        
     }
     componentDidMount(){
        
     }
    render(){
        let {data}=this.props
        return <div className="artist-desc">
                <div className="brief-desc">{data.data.briefDesc}</div>
                <ul className="introduction">
                {data.data.introduction.map((item,index)=>{
                    return <li key={`item-${index}`} className="item">
                        <h3 className="title">{item.ti}</h3>
                        <div className="desc">{item.txt.split("\n").map((v,i)=>{
                            return <p key={`${index}-${v}`}>{v}</p>
                        })}</div>
                    </li>
                })}
                </ul>
                
        </div>
    }
}
