import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/vedioDetail'
import Player from './modules/player'
 class VedioPlayer extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
    }
    componentDidMount(){
        this.props.vedioDetailAction({id:this.id})
        this.props.vedioCommentAction({id:this.id})
    }
    render(){

        let {props,state}=this
        console.log(props)
        return <div className="vedio-detail">
            <Player data={props}/>
        </div>
    }
}
export default createContainer(withRouter(VedioPlayer),"vedioPlay",actions)