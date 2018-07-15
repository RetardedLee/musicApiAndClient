import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css';
import {emoij} from 'constants/emoijMap'
const emojiReg=/\[(.*?)\]/g;
export default class Comment extends React.Component{
    getEmoij=(content)=> {
        const emojiReg=/\[(.*?)\]/g;
        return (content || "").replace(emojiReg, function($1, $2) {
            var emojId = emoij[$2];
            return !emojId ? $1 : '<img src="http://s1.music.126.net/style/web2/emt/emoji_' + emojId + '.png"/>'
        })
    }
    onChange=(page)=>{
        let offset=(page - 1) * 20
        
            this.props.getComment(page,offset,20)
    }
    render(){
        let {props}=this
        let comment=[]
        let hotComment=[]
        if(props.comment !== null){
            comment=props.comment.comments
            hotComment=props.comment.hotComments
        }
        return <ul className="comment-list">
             {hotComment.length >0 ?<li className="sub-title">精彩评论</li>:null}
            {
                hotComment.map((value,index)=>{
                    return  <li className="comment-item" key={value.commentId}>
                                <p className="avatar">
                                    <Link to={`/user/${value.user.userId}`} >
                                    <img className="block" width="35" height="35" src={value.user.avatarUrl} alt=""/>
                                    </Link>
                                </p>
                                <div className="detail">
                                    <p>
                                        <Link className="user-link" 
                                                    to={`/user/${value.user.userId}`}>{value.user.nickname}：
                                        </Link>
                                        <span 
                                                className="con" 
                                                dangerouslySetInnerHTML={{__html:value.content.replace(emojiReg,this.getEmoij(value.content))}}>
                                        </span>
                                    </p>
                                    {value.beReplied.length>0?value.beReplied.map((v,i)=>{
                                            return v.content==null?null:<p className="rep" key={i}>
                                                    <Link to={`/user/${v.user.userId}`}>@{v.user.nickname}</Link>
                                                    <span className="con" dangerouslySetInnerHTML={{__html:v.content.replace(emojiReg,this.getEmoij(v.content))}}></span>
                                                    </p>
                                    }):null}
                                    <p className="pub-time">
                                        <span>{moment(value.time).fromNow()}</span>
                                        <i className="iconfont icon-zan"><i style={{fontSize:12,fontStyle:"normal"}}>({value.likedCount})
                                        </i>
                                        </i>
                                    </p>
                                </div>
                            </li>
                })
            }
            <li className="sub-title">最新评论</li>
            {
               comment.map((value,index)=>{
                    return  <li className="comment-item" key={value.commentId}>
                                <p className="avatar">
                                <Link to={`/user/${value.user.userId}`} >
                                    <img className="block" width="35" height="35" src={value.user.avatarUrl} alt=""/>
                                </Link>
                                </p>
                                <div className="detail">
                                    <p>
                                        <Link className="user-link" 
                                            to={`/user/${value.user.userId}`}>
                                            {value.user.nickname}：
                                        </Link>
                                        <span 
                                            className="con" 
                                            dangerouslySetInnerHTML={{__html:value.content.replace(emojiReg,this.getEmoij(value.content))}}>
                                        </span>
                                    </p>
                                    {value.beReplied.length>0?value.beReplied.map((v,i)=>{
                                        return v.content==null?null:<p 
                                                    className="rep" 
                                                    key={i}>
                                                    <Link 
                                                        to={`/user/${v.user.userId}`} 
                                                        className="user-link">@{v.user.nickname}:
                                                    </Link>
                                                    <span 
                                                        className="con" 
                                                        dangerouslySetInnerHTML={{__html:v.content.replace(emojiReg,this.getEmoij(v.content))}}>
                                                    </span>
                                                </p>
                                    }):null}
                                    <p className="pub-time">
                                        <span>{moment(value.time).fromNow()}</span>
                                        <i className="iconfont icon-zan"><i style={{fontSize:12,fontStyle:"normal"}}>
                                            ({value.likedCount})
                                        </i>
                                        </i>
                                    </p>
                                </div>
                            </li>
                })}
                {props.comment.comments.length>0?<Pagination onChange={this.onChange} current={props.current || 1} total={props.comment.total} pageSize={20} style={{marginTop:15}} size="small"/>:null}
            
        </ul>
        
    }
}