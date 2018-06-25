import React from 'react'
import createContainer from 'utils/createContainer'
import actions from 'action/vedio'
import LoadingInfo from 'component/common/LoadingInfo'
import InfiniteScroll from 'react-infinite-scroller'
import VedioList from './modules/vedioList'
import path from 'constants/apiPath'
import "./index.scss"
var qs = require('querystringify');

class Vedio extends React.Component{
    constructor(props){
        super(props)
        this.data={
            data:[],
            hasMore:true
        }
    }
    componentDidMount(){
        let th=this
        this.props.vedioListAction({offset:0,limit:20})
    }
    loadFunc=(e)=>{
        this.props.vedioListAction({offset:e*20,limit:20})
    }
    render(){
        let {state,props}=this
        this.data.data=this.data.data.concat(props.vedio.vedioList.content.data)
        this.data.hasMore=props.vedio.vedioList.content.hasMore
        return <div className="vedio">
        <div className="infinite">
        <InfiniteScroll
                loadMore={this.loadFunc}
                hasMore={this.data.hasMore}
                loader={<LoadingInfo status={0} key={"infinite"} height={50}/>}
                initialLoad={true}
                useWindow={false}
                pageStart={0}
                threshold={50}
            >
                <VedioList data={this.data.data} />
            </InfiniteScroll>

        </div>
        </div>
    }
}
export default createContainer(Vedio,"vedio",actions)