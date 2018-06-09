import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.scss'
const activeStyle={borderLeft:"3px solid #c62f2f",background:"#e6e7ea",color:"#333"}
export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {state,props}=this
        console.log(props)
        return (<div className="app-menu">
                    <dl>
                        <dt>推荐</dt>
                        <dd><NavLink to="/music" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-gequguanli"></i>发现音乐</NavLink></dd>
                        <dd><NavLink to="/vedio" activeStyle={activeStyle} className="nav-link" ><i className="iconfont icon-shipin"></i>视频</NavLink></dd>
                        <dd><NavLink to="/friend" activeStyle={activeStyle} className="nav-link" ><i className="iconfont icon-pengyou"></i>朋友</NavLink></dd>
                        <dt>创建的歌单</dt>
                        {
                            props.login.status===1?null:<dd className="nav-link">(登录后查看)</dd>
                        }
                        <dd><NavLink to="/playlist" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist1" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist2" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dt>收藏的歌单</dt>
                        {
                            props.login.status===1?null:<dd className="nav-link">(登录后查看)</dd>
                        }
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist3" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist4" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        <dd><NavLink to="/playlist5" activeStyle={activeStyle} className="nav-link"><i className="iconfont icon-playlist"></i>我的歌单</NavLink></dd>
                        
                    </dl>
            </div>)
    }
}