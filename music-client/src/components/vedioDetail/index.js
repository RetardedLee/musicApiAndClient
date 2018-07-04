import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/vedioDetail'
import Player from './modules/player'
import Comment from './modules/comment'
import LoadingInfo from 'component/common/LoadingInfo'
import './index.scss'
 class VedioPlayer extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
        this.state={
            current:1,
            limit:20
        }
    }
    getCommentPage=(e)=>{
        let th=this
        this.setState({
            current:e
        },()=>{
            this.props.vedioCommentAction({offset:(e-1)*20,id:th.id})
        })
    }
    componentDidMount(){
        this.props.showMenuAction(false)
        this.props.vedioDetailAction({id:this.id})
        this.props.vedioCommentAction({id:this.id})
        this.props.vedioRelativeAction({id:this.id,type:1})
        this.props.vedioUrlAction({id:this.id,type:240})
    }
    render(){

        let {props,state}=this
        return <div className="vedio-detail">
                    <div className="main">
                        <Player url={props.vedioPlay.vedioUrl} detail={props.vedioPlay.vedioDetail}/>
                        <LoadingInfo status={props.vedioPlay.vedioComment.status} component={
                            <Comment 
                                comment={props.vedioPlay.vedioComment.content}
                                getComment={this.getCommentPage}
                                current={state.current} />}
                            />
        
                        
                    </div>
                    <div className="aside"></div>

        </div>
    }
}
export default createContainer(withRouter(VedioPlayer),"vedioPlay",actions)