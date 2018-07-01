import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/vedioDetail'
 class VedioPlayer extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
    }
    componentDidMount(){
        this.props.vedioDetailAction({mvid:this.id})
        this.props.vedioCommentAction({id:this.id})
    }
    render(){
        
        return <div className="vedio-detail">

        </div>
    }
}
export default createContainer(withRouter(VedioPlayer),"vedioPlay",actions)