import React from 'react'
import LoadingInfo from 'component/common/LoadingInfo'
import Artist from './modules/artist'
import Newtest from './modules/newtest'
import Playlist from './modules/playlist'
import {withRouter} from 'react-router-dom'
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
     constructor(props){
        super(props)
     }
     componentDidMount(){
        //  组件加载完先发送第一个tab的action
         this.props.bannerAction()
         this.props.recListAction()
         this.props.recMvAction()
         this.props.excusiveAction()
         this.props.newTestAction()
     }
     on
    render(){
        let {state,props}=this
        let recDom=<LoadingInfo status={1} component={<Recommend data={props.music}/>}/>
        let listDom=<LoadingInfo status={1} component={<Playlist data={props.recList}/>}/>
        let rankDom=<LoadingInfo status={1} component={<Ranking />}/>
        let artDom=<LoadingInfo status={1} component={<Artist />}/>
        let newDom=<LoadingInfo status={1} component={<Newtest />}/>
        return <div className="music contentPd">
                <Tabs
                    defaultActiveKey="recommend"
                    renderTabBar={()=><ScrollableInkTabBar />}
                    renderTabContent={()=><TabContent />}
                    onChange={(e)=>{console.log(e)}}
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