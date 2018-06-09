import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import "moment/min/locales.min"
import {formatNumber} from 'utils/numberUtil'
/* import defaultSwiper from 'static/timg.jpg' */
moment.locale("zh-cn");
let defaultSwiper="http://p1.music.126.net/S3y9KlI0AzsC8ghiS5SggA==/109951163339116225.jpg"
class RecItem extends React.Component{
    static defaultProps={
        type:1
    }
    render(){
        let {state,props}=this
        return (props.type==1?<li className="rec-item">
            <Link to={`/playlist/${props.data.id}`} className="block">
                <p className="relative"><img src={props.data.picUrl}/>
                <span className="listens"><i className="iconfont icon-1"></i>{formatNumber(props.data.playcount)}</span>
                <span className="reason">{props.data.copywriter}</span>
                <span className="play"><i className="iconfont icon-bofang1"></i></span>
                </p>
                <p className="desc" title={props.data.name}>{props.data.name}</p>
            </Link>
        </li>:<li className="rec-item">
            <span className="block">
                <p className="relative" style={{width:130,height:130}}>
                <span className="block" style={{textAlign:'center',marginTop:10,marginBottom:15}}>{moment().format("dddd")}</span>
                <span className="block" style={{fontSize:80,color:"#c62f2f",textAlign:"center"}}>{moment().date()}</span>
                <span className="reason">根据您的音乐口味生成每日更新</span>
                </p>
                <p className="desc">每日歌曲推荐</p>
            </span>
        </li>)
    }
}
export default class RecList extends React.Component{

    render(){
        let {state,props}=this
        if(props.data.status==1){
            return <ul className="rec-list">
                <RecItem type={0}/>
                {props.data.content.map((v,k)=><RecItem  data={v} key={v.id}/>)}
        </ul>
        }return null
        
    }
}
