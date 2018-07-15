import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/mvDetail'
import Player from './modules/player'
import Comment from './modules/comment'
import Relative from './modules/relative'
import Detail from './modules/detail'
import LoadingInfo from 'component/common/LoadingInfo'
import './index.scss'
 class MvPlayer extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
        this.player=null
        this.state={
            current:1,
            limit:20
        }
    }
    getRef=(e)=>{
        this.player=e
    }
    getCommentPage=(e)=>{
        let th=this
        this.setState({
            current:e
        },()=>{
            this.props.mvCommentAction({offset:(e-1)*20,id:th.id})
        })
    }
    componentDidMount(){
        this.props.showMenuAction(false)
        this.props.mvDetailAction({id:this.id})
        this.props.mvCommentAction({id:this.id})
        this.props.mvRelativeAction({id:this.id,type:0})
        this.props.mvUrlAction({id:this.id,type:240})
    }
    getData=(e)=>{
        this.id=e
        this.props.mvDetailAction({id:this.id})
        
        this.props.mvCommentAction({id:this.id})
        this.props.mvRelativeAction({id:this.id,type:0})
        this.props.mvUrlAction({id:this.id,type:240})
        this.player.load()
    }
    render(){

        let {props,state}=this
        return <div className="vedio-detail">
                    <div className="main">
                        <div className="left">
                        <Player url={props.vedioPlay.vedioUrl} detail={props.vedioPlay.vedioDetail} getRef={this.getRef} />
                        <LoadingInfo status={props.vedioPlay.vedioComment.status} component={
                            <Comment 
                                comment={props.vedioPlay.vedioComment.content}
                                getComment={this.getCommentPage}
                                current={state.current} />}
                            />
                        </div>
                    </div>
                    <div className="aside">
                    <LoadingInfo 
                        status={props.vedioPlay.vedioDetail.status}
                        component={<Detail data={props.vedioPlay.vedioDetail.content} />}
                        
                    />
                    <LoadingInfo 
                        status={props.vedioPlay.vedioRelative.status}
                        component={<Relative data={props.vedioPlay.vedioRelative.content} clickRelative={this.getData}/>}
                    />
                    </div>

        </div>
    }
}
export default createContainer(withRouter(MvPlayer),"mvPlay",actions)