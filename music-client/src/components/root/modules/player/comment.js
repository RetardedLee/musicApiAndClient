import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {emoij} from 'constants/emoijMap'
const emojiReg=/\[(.*?)\]/g;
export default class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            offset:0,
            limit:20,
            current:1
        }
    }
    getEmoij=(content)=> {
        const emojiReg=/\[(.*?)\]/g;
        return (content || "").replace(emojiReg, function($1, $2) {
            var emojId = emoij[$2];
            return !emojId ? $1 : '<img src="http://s1.music.126.net/style/web2/emt/emoji_' + emojId + '.png"/>'
        })
    }
    render(){
        let {state,props}=this
        return <ul className="comment-list">
            <li className="sub-title">精彩评论</li>
            {
                props.comment.hotComments.map((value,index)=>{
                    return  <li className="comment-item" key={value.commentId}>
                                <p className="avatar">
                                    <img className="block" width="35" height="35" src={value.user.avatarUrl}/>
                                </p>
                                <div className="detail">
                                    <p><Link className="user-link" to={`/artist/${value.user.userId}`}>{value.user.nickname}：</Link><span className="con" dangerouslySetInnerHTML={{__html:value.content.replace(emojiReg,this.getEmoij(value.content))}}></span></p>
                                    {value.beReplied.length>0?value.beReplied.map((v,i)=>{
                                       
                                    return <p className="rep" key={i}><Link to={`/user/${v.user.userId}`}>@{v.user.nickname}</Link><span className="con" dangerouslySetInnerHTML={{__html:v.content.replace(emojiReg,this.getEmoij(v.content))}}></span></p>
                                    }):null}
                                    <p className="pub-time"><span>{moment(value.time).fromNow()}</span><i className="iconfont icon-zan"><i style={{fontSize:12,fontStyle:"normal"}}>({value.likedCount})</i></i></p>
                                </div>
                            </li>
                })
            }
            <li className="sub-title">最新评论</li>
            {
                props.comment.comments.map((value,index)=>{
                    return  <li className="comment-item" key={value.commentId}>
                                <p className="avatar">
                                    <img className="block" width="35" height="35" src={value.user.avatarUrl}/>
                                </p>
                                <div className="detail">
                                    <p><Link className="user-link" to={`/artist/${value.user.userId}`}>{value.user.nickname}：</Link><span className="con" dangerouslySetInnerHTML={{__html:value.content.replace(emojiReg,this.getEmoij(value.content))}}></span></p>
                                    {value.beReplied.length>0?value.beReplied.map((v,i)=>{
                                        return <p className="rep" key={i}><Link to={`/user/${v.user.userId}`} className="user-link">@{v.user.nickname}:</Link><span className="con" dangerouslySetInnerHTML={{__html:v.content.replace(emojiReg,this.getEmoij(v.content))}}></span></p>
                                    }):null}
                                    <p className="pub-time"><span>{moment(value.time).fromNow()}</span><i className="iconfont icon-zan"><i style={{fontSize:12,fontStyle:"normal"}}>({value.likedCount})</i></i></p>
                                </div>
                            </li>
                })
            }
        </ul>
    }
}