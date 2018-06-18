import React from 'react'
import {Link} from 'react-router-dom'
 class ListCollect extends React.Component{
     
    render(){
        let {data}=this.props
        let subs=data.subscribers
        return <ul className="collect-list">
            {subs.map((k,i)=>{
                return <li key={k.userId} className="collect-item">
                    <Link to={`/user/${k.userId}`} className="user-link">
                        <img src={`${k.avatarUrl}?param=60y60`} alt={k.nickname}/>
                        <p className="nickname">{k.nickname}</p>
                    </Link>
                </li>
            })}
        
        </ul>
    }
}
export default ListCollect