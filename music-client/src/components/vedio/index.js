import React from 'react'
import Radio from 'component/common/radio'
import createContainer from 'utils/createContainer'
import actions from 'action/vedio'
import config from './vedioCatConfig'
import LoadingInfo from 'component/common/LoadingInfo'
import InfiniteScroll from 'react-infinite-scroller'
import VedioList from './modules/vedioList'
import path from 'constants/apiPath'
import "./index.scss"
var qs = require('querystringify');
const Group=Radio.Group
const Button=Radio.Button
class Vedio extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            page:0,
            cat:"5100",
            more:true
        }
    }
    componentDidMount(){
        this.getData("5100",0)
    }
    getData=(cat,page)=>{
        
        let query=qs.stringify({
            cat,
            page
        },true)
        fetch(`${path.vedio.vedioList}${query}`,{
            credentials: 'include',
            method: "GET",
            cache: "no-cache",
            mode: "cors"
        }).then(response=>{
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                this.setState({data:[],more:false})
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then(response=>response.json()).then((json)=>{
            let {state}=this
            if(json.code===200){
                this.setState({
                    data:state.data.concat(json.datas),
                    more:json.hasmore
                })
            }
        })
    }
    catChange=(e)=>{
        var cat=e.target.value
        this.setState({cat,page:0,data:[]},()=>{
            this.getData(cat,0)
        })
    }
    loadFunc=(e)=>{
        this.getData(this.state.cat,e)
    }
    render(){
        let {state,props}=this
        return <div className="vedio">
        <h2 style={{marginTop:15,textAlign:"center",marginBottom:15}}><Group defaultValue={config[0].dataKey} onChange={this.catChange}>
            {config.map((v,k)=>{
                return <Button 
                    value={v.dataKey} 
                    key={v.dataKey}>
                        {v.title}
                    </Button>
            })}
        </Group>
        </h2>
        <div className="infinite">
        {state.data.length===0?null:<InfiniteScroll
                loadMore={this.loadFunc}
                hasMore={state.more}
                loader={<LoadingInfo status={0} key={"infinite"} height={50}/>}
                initialLoad={true}
                useWindow={false}
                pageStart={0}
                threshold={100}
            >
                <VedioList data={state.data} key={"in"}/>
            </InfiniteScroll>
            }
        </div>
        </div>
    }
}
export default createContainer(Vedio,"vedio",actions)