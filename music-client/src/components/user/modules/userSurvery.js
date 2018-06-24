import React from 'react'
import {Link} from 'react-router-dom'
import areaMap from 'constants/areaMap'
export default class UserSurvery extends React.Component{
     constructor(props){
         super(props)
        console.log(props)
     }
     componentDidMount(){
        
     }
    render(){
        let {data}=this.props
        let social=data.bindings.filter((value,index)=>{
            return value.type===2
        }).map((value,index)=>{
            return <a href={value.url} title="新浪微博" target="_blank" key={value.type}><i className="iconfont icon-xinlangweibo"></i></a>
        })
        return <div className="user-survery">
                <div className="pic">
                    <img src={`${data.profile.avatarUrl}?param=200y200`} alt={data.name}/>
                </div>
                <div className="info">
                    <h2 className="title">{data.profile.nickname}
                    <span className="gender">{data.profile.gender===0?<i className="iconfont icon-nan"></i>:<i className="iconfont icon-nv-copy"></i>}</span>
                    <span className="level">{`Lv.${data.level}`}</span>
                    </h2>
                    <div className="link">
                        <Link to={`/event/${data.profile.userId}`}>
                                <p className="count">{data.profile.eventCount}</p>
                                <p>动态</p>
                        </Link>
                        <Link to={`/sub/${data.profile.userId}`}>
                                <p className="count">{data.profile.follows}</p>
                                <p>关注</p>
                        </Link>
                        <Link to={`/follow/${data.profile.userId}`}>
                                <p className="count">{data.profile.followeds}</p>
                                <p>粉丝</p>
                        </Link>
                    </div>
                    <div className="social">社交网络:{social}</div>
                    <div className="area">所在地区:{areaMap[data.profile.province]?<span><span className="province">{areaMap[data.profile.province]}</span><span className="city">{areaMap[data.profile.city]}</span></span>:"未知"}</div>
                    <div className="desc">个人介绍:<span title={data.profile.signature}>{data.profile.signature?data.profile.signature:"暂无介绍"}</span></div>
                </div>
                
        </div>
    }
}
