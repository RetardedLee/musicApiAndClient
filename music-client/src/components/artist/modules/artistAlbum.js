import React from 'react'
import {Link} from 'react-router-dom'
export default class ArtistAlbum extends React.Component{
     constructor(props){
         super(props)
        
     }
     componentDidMount(){
        
     }
    render(){
        let {data}=this.props
        return <div className="artist-album">
               <ul className="album-list rec-list">{data.data.map((value,index)=>{
            return <li className="rec-item" key={value.id}>
            <Link to={`/album/${value.id}`} className="block">
                <p className="relative"><img src={`${value.picUrl}?param=130y130`} alt={value.name}/>
                </p>
                <p className="desc" title={value.name}>{value.name}</p>
            </Link>
        </li>    
        })}
        </ul>
        </div>
    }
}
