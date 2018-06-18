import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
 class ListInfo extends React.Component{
     
    render(){
        let {state,props}=this
        return props.data==null?null:<div className="info">
                    <div className="count">
                        <div className="total">
                            <p>歌曲数</p>
                            <p>{props.data.trackCount}</p>
                        </div>
                        <div className="total">
                            <p>播放数</p>
                            <p>{formatNumber(props.data.playCount)}</p>
                        </div>
                    </div>
                    <img src={`${props.data.coverImgUrl}?param=170y170`} className="block cover"/>
                    <div className="right">
                    <div className="title">
                    <span className="type">歌单</span>
                    <span className="name">{props.data.name}</span>
                    </div>
                    <div className="creator">
                        <Link to="/a">
                            <img src={`${props.data.creator.avatarUrl}?param=30y30`} />
                            <span className="nickname">{props.data.creator.nickname}</span>
                            <span className="create-time">{moment(props.data.createTime).format("YYYY-MM-DD")}创建</span>
                        </Link>
                    </div>
                    <div className="play-all"><span className="play"><i className="iconfont icon-bofang1" style={{color:"#fff"}}></i>播放全部</span><span className="add" title="添加到播放列表">+</span></div>
                    <div className="tag">标签:{props.data.tags.map((value,index)=>{
                        return <span key={value}>{value}</span>
                    })}</div>
                    <div className="desc">简介:<span>{props.data.description}</span></div>
                    </div>
        </div>
    }
}
export default ListInfo