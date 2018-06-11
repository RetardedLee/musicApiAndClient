import React from 'react'
import ArtistTag from './artistTag'
import ArtistList from './artistList'
import LoadingInfo from 'component/common/LoadingInfo'
import Pagination from 'rc-pagination'
export default class Artist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tag:1,
            language:100,
            filter:-1
        }
    }
    onChage=(a,b)=>{
        this.setState({
            [a]:b
        },()=>{
            let {state}=this
            let tag=`${state.language}${state.tag}`
            let initial=`${state.filter}`
                let ops={
                    cat:tag,
                    initial:initial,
                    limit:99
                }
                this.props.getArtistList(ops)
        })
    }
    render(){
        let {props}=this
        return <div className="artist" onScroll={(e)=>{console.log(e)}}>
            <ArtistTag onChange={this.onChage}/>
            <LoadingInfo 
                status={props.data.artistTop.status} 
                component={<ArtistList data={props.data.artistTop.content}/>} />
        </div>
    }
}