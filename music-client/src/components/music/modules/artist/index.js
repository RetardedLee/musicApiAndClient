import React from 'react'
import ArtistTag from './artistTag'
import ArtistList from './artistList'
import LoadingInfo from 'component/common/LoadingInfo'
import InfiniteScroll from 'react-infinite-scroller'
import path from 'constants/apiPath'
var qs = require('querystringify');
export default class Artist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tag:1,
            language:100,
            filter:-1,
            data:[],
            offset:0,
            current:1
        }
    }
    componentDidMount(){
        this.getData(0)
    }
    getData=(offset)=>{
        let {state}=this
        let tag=`${state.language}${state.tag}`
        let initial=`${state.filter}`
        let query=qs.stringify({
            cat:tag,
            initial:initial,
            limit:20,
            offset:offset
        },true)
        fetch(`${path.music.artist.artistList}${query}`,{
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
            if(json.code===200){
                this.setState({
                    data:state.data.concat(json.artists),
                    more:json.more
                })
            }
        })
    }
    
    onChage=(a,b)=>{
        this.setState({
            [a]:b,
            offset:0,
            current:1,
            data:[]
        },()=>{
            let {state}=this
            let tag=`${state.language}${state.tag}`
            let initial=`${state.filter}`
            this.getData(0)

        })
    }
    loadFunc=(e)=>{
        console.log(this.state)
       let offset=(e-1) * 20
       this.getData(offset)
       /*  this.setState({
            current:e,
            offset:(e-1)*20
        }) */
    }
    render(){
        let {props,state}=this
        console.log(state)
        return <div className="artist">
            <ArtistTag onChange={this.onChage}/>
            <div className="infinite-scroll">
            {state.data.length===0?null:<InfiniteScroll
                loadMore={this.loadFunc}
                hasMore={state.more}
                loader={<LoadingInfo status={0} key={"infinite"} height={50}/>}
                initialLoad={true}
                useWindow={false}
                pageStart={1}
                threshold={50}
            >
                {<ArtistList data={state.data}/> }
            </InfiniteScroll>
            }
            </div>
        </div>
    }
}