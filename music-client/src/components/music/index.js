import React from 'react'
import LoadingInfo from 'component/common/LoadingInfo'
import Artist from './modules/artist'
import Newtest from './modules/newtest'
import Playlist from './modules/playlist'
import Recommend from './modules/recommend'
import Ranking from './modules/ranking'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import './index.scss'
import createContainer from 'utils/createContainer'
import actions from 'action/music'
 class Music extends React.Component{
    
     componentDidMount(){
        //  组件加载完先发送第一个tab的action
         this.props.bannerAction()
         this.props.recListAction()
         this.props.recMvAction()
         this.props.excusiveAction()
         this.props.newTestAction()
         this.props.showMenuAction(true)
        
     }
    tabChange=(e)=>{
        let obj=this.props.music
        if(e==="recommend"){
         if(obj.banner.status !==1)this.props.bannerAction()
         if(obj.recList.status !==1)this.props.recListAction()
         if(obj.recMv.status !==1)this.props.recMvAction()
         if(obj.excusive.status !==1)this.props.excusiveAction()
         if(obj.newTest.status !== 1)this.props.newTestAction()
        }else if(e==="playlist"){
            if(obj.hotTag.status !==1)this.props.hotTagAction()
            this.props.getListAction({limit:10})
        }else if(e==="ranking"){
            if(obj.ranking.rankSugre.status !==1){
                this.props.rankSurgeAction()
            }
            if(obj.ranking.rankNew.status !==1){
                this.props.rankNewAction()
            }
            if(obj.ranking.rankHot.status !==1){
                this.props.rankHotAction()
            }
            if(obj.ranking.rankOriginal.status !==1){
                this.props.rankOriginalAction()
            }
        }else if(e==="artist"){
                this.props.artistTopAction({cat:1001,initial:-1,limit:99})
        }else{
                this.props.newAlbumAction({area:"ALL",limit:10})
        }
    }
    catChange=(e)=>{
        this.props.getListAction(e)
    }
    getArtistList=(e)=>{
        this.props.artistTopAction(e)
    }
    newAlbumChange=(e)=>{
        this.props.newAlbumAction(e)
    }
    render(){
        let {state,props}=this
        let recDom=<LoadingInfo 
                    status={1} 
                    component={<Recommend 
                                    data={props.music} 
                                    urlAction={props.musicUrlAction} 
                                    infoAction={props.musicInfoAction} 
                                    lyricAction={props.musicLyricAction} 
                                    musicInfo={props.music.musicInfo}/>}
                    />
        let listDom=<LoadingInfo 
                    status={1} 
                    component={<Playlist 
                                data={props.music} 
                                catChange={this.catChange}/>}
                    />
        let rankDom=<LoadingInfo 
                    status={1} 
                    component={<Ranking 
                                data={props.music.ranking}/>}
                    />
        let artDom=<LoadingInfo 
                    status={1} 
                    component={<Artist 
                                getArtistList={this.getArtistList} 
                                data={props.music.artist}/>}
                    />
        let newDom=<LoadingInfo 
                    status={1} 
                    component={<Newtest 
                                data={props.music.newAlbum} 
                                newAlbumChange={this.newAlbumChange}/>}
                    />
        return <div className="music contentPd">
                <Tabs
                    defaultActiveKey="recommend"
                    renderTabBar={()=><ScrollableInkTabBar />}
                    renderTabContent={()=><TabContent />}
                    onChange={this.tabChange}
                    destroyInactiveTabPane={true}
                    >
                    <TabPane tab={<div>个性推荐</div>} key="recommend">{recDom}</TabPane>
                    <TabPane tab={<div>歌单</div>} key="playlist">{listDom}</TabPane>
                    <TabPane tab={<div>排行榜</div>} key="ranking">{rankDom}</TabPane>
                    <TabPane tab={<div>歌手</div>} key="artist">{artDom}</TabPane>
                    <TabPane tab={<div>最新音乐</div>} key="newtest">{newDom}</TabPane>
                </Tabs>
        </div>
    }
}
export default createContainer(Music,"music",actions)