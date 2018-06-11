import {Link} from 'react-router-dom'
import React from 'react'
export default class ArsistList extends React.Component{

    render(){
        let{data}=this.props
        
        return <ul className="artist-list rec-list">{data.map((value,index)=>{
            return <li className="rec-item" key={value.id}>
            <Link to={`/playlist/${value.id}`} className="block">
                <p className="relative"><img src={`${value.picUrl}?param=130y130`} alt={value.name}/>
                </p>
                <p className="desc" title={value.name}>{value.name}</p>
            </Link>
        </li>    
        })}</ul>
    }
}