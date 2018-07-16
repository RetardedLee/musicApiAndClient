import React from 'react'
import {Link} from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
import formatSecond from 'utils/formatSeconds'
 class Relative extends React.Component{
    href=(e)=>{
        this.props.clickRelative(e)
    }
    render(){
        console.log(this.props)
        return <div>
            <h2>相关推荐</h2>
            <ul className="relative-list">
            {
                this.props.data.map((v,k)=>{
                    return  <li key={v.vid}>
                    
                    <p className="relative">
                    <Link className="block" to={`/${v.type === 1 ? "vedio":"mv"}/${v.vid}`} onClick={v.type === 0 ? this.href.bind(this,v.vid):null}>
                        <img className="block" src={`${v.coverUrl}?param=175y100`} alt={v.title}/>
                        <span className="count"><i className="iconfont "></i>{formatNumber(v.playTime)}</span>
                    </Link>
                    </p>
                    <div className="right">
                        <Link to={`/${v.type === 1 ? "vedio":"mv"}/${v.vid}`} className="block link-name" onClick={v.type === 0 ? this.href.bind(this,v.vid):null}>
                            {v.title}
                        </Link>
                        <div className="duration">
                            {formatSecond(v.durationms)}
                        </div>
                        <div className="creator">
                        {
                            v.creator.map((v,k)=>{
                                return <Link to={`/user/${v.userId}`} key={v.userId} className="link-user" >{v.userName}</Link>
                            })
                        }
                        </div>
                    </div>
                    
                </li>
                })
            }
               
            </ul>
        </div>
    }
}
export default Relative