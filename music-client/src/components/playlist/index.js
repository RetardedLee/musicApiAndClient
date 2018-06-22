import React from 'react'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import {withRouter} from 'react-router-dom'
import LoadingInfo from 'component/common/LoadingInfo'
import createContainer from 'utils/createContainer'
import ListInfo from './modules/listInfo'
import ListComment from './modules/listComment'
import ListCollect from './modules/listCollect'
import ListSong from './modules/listSong'
import actions from 'action/playlist'
import "./index.scss"
class Playlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:1,
            limit:20
        }
        this.id=props.match.params.id
        this.props.playListDetailAction({id:this.id})
        
    }
    getCommentPage=(e)=>{
        let th=this
        this.setState({
            current:e
        },()=>{
            this.props.playListCommentAction({offset:(e-1)*20,id:th.id})
        })
    }
    tabChange=(e)=>{
        this.setState({
            current:1,
        })
        if(e==="list"){
            if(this.props.playlist.playListDetail.status !==1 ){
                this.props.playListDetailAction({id:this.id})
            }
        }else if(e==="comment"){
            this.props.playListCommentAction({id:this.id})
        }else{
            if(this.props.playlist.playListDetail.status !==1 ){
                this.props.playListDetailAction({id:this.id})
            }
        }
    }
    render(){
        let {state,props}=this
        console.log(props)
        return <div className="playlist-detail">
                    <LoadingInfo 
                            status={props.playlist.playListDetail.status} 
                            component={<ListInfo data={props.playlist.playListDetail.content}/>}
                            />
            
            <div className="detail">
            <Tabs
                    defaultActiveKey="list"
                    renderTabBar={()=><ScrollableInkTabBar />}
                    renderTabContent={()=><TabContent />}
                    onChange={this.tabChange}
                    destroyInactiveTabPane={true}
                    >
                    <TabPane tab={<div>歌曲列表</div>} key="list">
                    <LoadingInfo 
                            status={props.playlist.playListDetail.status} 
                            component={<ListSong 
                                data={props.playlist.playListDetail.content} />}
                            />
                    
                    </TabPane>
                    <TabPane tab={<div>评论</div>} key="comment">
                    <div className="comment">
                    <LoadingInfo 
                            status={props.playlist.playListComment.status} 
                            component={<ListComment
                                comment={props.playlist.playListComment.content}
                                getComment={this.getCommentPage}
                                current={state.current} />}
                            /> 
                    </div>  
                    </TabPane>
                    <TabPane tab={<div>收藏者</div>} key="collect">
                    <LoadingInfo 
                            status={props.playlist.playListDetail.status} 
                            component={<ListCollect 
                                data={props.playlist.playListDetail.content} />}
                            />
                    </TabPane>
            </Tabs>
            </div>
        </div>
    }
}
export default createContainer(withRouter(Playlist),"playlist",actions)