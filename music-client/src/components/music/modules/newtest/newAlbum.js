import {Link} from 'react-router-dom'
import React from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css';
export default class NewAlbum extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let{data}=this.props
        return<div> 
        <ul className="album-list rec-list">{data.map((value,index)=>{
            return <li className="rec-item" key={value.id}>
            <Link to={`/album/${value.id}`} className="block">
                <p className="relative"><img src={`${value.picUrl}?param=130y130`} alt={value.name}/>
                </p>
                <p className="desc" title={value.name}>{value.name}</p>
            </Link>
        </li>    
        })}
        </ul>
        <Pagination onChange={this.props.onChange} current={this.props.current} total={this.props.total} />
        </div>
    }
}