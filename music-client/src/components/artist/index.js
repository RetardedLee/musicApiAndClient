import React from 'react'
import {withRouter} from 'react-router-dom'
import actions from 'action/artist'
import createContainer from 'utils/createContainer'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import LoadingInfo from 'component/common/LoadingInfo'
import "./index.scss"
import ArtistSurvery from './modules/artistSurvery';
import ArtistMv from './modules/artistMv'
import ArtistDetail from './modules/artistDetail'
import ArtistAlbum from './modules/artistAlbum'
 class Artist extends React.Component{
     constructor(props){
         super(props)
         this.id=props.match.params.id
         this.state={
             tab:"album"
         }
     }
     componentDidMount(){
         this.props.artistSurveyAction({id:this.id})
         this.props.artistAlbumAction({id:this.id,limit:20})
     }
     tabChange=(e)=>{
         if(e==="mv"){
                this.props.artistMvAction({id:this.id})
           
         }else if(e==="detail"){
        
                this.props.artistDescAction({id:this.id})
    
           
         }/* else if(e==="album"){
            if(this.props.artist.artistAlbum.status !== 1){
                this.props.artistAlbumAction({id:this.id})
             }
         } */
     }
    render(){
        let {state,props}=this
        let artist=props.artist
        return <div className="artist-detail">
                    <LoadingInfo 
                            height={200}
                            status={artist.artistSurvey.status} 
                            component={<ArtistSurvery 
                                            data={artist.artistSurvey.content}/>}/>
            
                    <div className="detail">
                        <Tabs
                            defaultActiveKey="album"
                            renderTabBar={()=><ScrollableInkTabBar />}
                            renderTabContent={()=><TabContent />}
                            onChange={this.tabChange}
                            destroyInactiveTabPane={true}
                            >
                            <TabPane tab={<div>专辑</div>} key="album">
                                <LoadingInfo 
                                        status={artist.artistAlbum.status} 
                                        component={<ArtistAlbum 
                                            data={artist.artistAlbum.content} />}
                                        />
                                </TabPane>
                            <TabPane tab={<div>MV</div>} key="mv">
                            <div className="mv">
                                <LoadingInfo 
                                        status={artist.artistMv.status} 
                                        component={<ArtistMv
                                            data={artist.artistMv.content} />}
                                        /> 
                            </div>  
                            </TabPane>
                            <TabPane tab={<div>歌手详情</div>} key="detail">
                                <LoadingInfo 
                                        status={artist.artistDesc.status} 
                                        component={<ArtistDetail 
                                            data={artist.artistDesc.content} />}
                                        />
                            </TabPane>
                        </Tabs>
                    </div>
        </div>
    }
}
export default createContainer(withRouter(Artist),"artist",actions)