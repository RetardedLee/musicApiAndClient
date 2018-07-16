import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/album'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import LoadingInfo from 'component/common/LoadingInfo'
import "./index.scss"
import AlbumDetail from './modules/albumDetail'
import AlbumSurvery from './modules/albumSruvery'
import SongList from './modules/songList'
import CommentList from './modules/commentList'
 class Album extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
        this.state={
            current:1
        }
    }
    componentDidMount(){
        this.props.albumDetailAction({id:this.id})
        this.props.showMenuAction(true)
    }
    
    getCommentPage=(e)=>{
        let th=this
        this.setState({
            current:e
        },()=>{
            this.props.albumCommentAction({offset:(e-1)*20,id:th.id})
        })
    }
    tabChange=(e)=>{
        this.setState({
            current:1,
        })
        if(e==="comment"){
          this.props.albumCommentAction({id:this.id})  
        }
    }
    render(){
      let  {state,props}=this
      let {album}=props
        return <div className="album-detail">
                    <LoadingInfo 
                        height={200}
                        status={props.album.albumDetail.status} 
                        component={<AlbumSurvery 
                                        data={props.album.albumDetail.content}/>}
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
                                        status={album.albumSong.status} 
                                        component={<SongList 
                                            data={album.albumSong.content} />}
                                        />
                                </TabPane>
                            <TabPane tab={<div>评论</div>} key="comment">
                            <div className="comment">
                                <LoadingInfo 
                                        status={album.albumComment.status} 
                                        component={<CommentList
                                            comment={album.albumComment.content} 
                                            getComment={this.getCommentPage}
                                            current={state.current}
                                            />}
                                        /> 
                            </div>  
                            </TabPane>
                            <TabPane tab={<div>专辑详情</div>} key="detail">
                                <LoadingInfo 
                                        status={album.albumDetail.status} 
                                        component={<AlbumDetail 
                                            data={album.albumDetail.content} />}
                                        />
                            </TabPane>
                        </Tabs>            
                </div>
        
        </div>
    }
}
export default createContainer(withRouter(Album),"album",actions)