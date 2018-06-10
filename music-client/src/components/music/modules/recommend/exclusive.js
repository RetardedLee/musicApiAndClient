import React from 'react'
import {Link } from 'react-router-dom'
export default class Exclusive extends React.Component{

    render(){
        let {status,content}=this.props.data
        if(status==1){
            return <div className="exclusive">
                {content.map((v,i)=>(
                    <Link to={`/mv/${v.url}`} className="block link"  key={v.id}>
                    <figure className="item">
                        <img src={`${v.sPicUrl}?param=230y130`} alt={v.name}/>
                        <figcaption title={v.name}>{v.name}</figcaption>
                    </figure>
                    </Link>
                ))}
            </div>
        }
        return null
    }
}