import React from 'react'
import config from './albumTagConfig'
import Radio from 'component/common/radio'
import LoadingInfo from 'component/common/LoadingInfo'
import NewAlbum from './newAlbum'
const Group=Radio.Group
const Button=Radio.Button


export default class NewTest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            current:1,
            area:"ALL"
        }
       
    }
    onChange=(page)=>{
        this.setState({
            current:page
        },(e)=>{
            let {state}=this
            this.props.newAlbumChange({offset:(page-1)*10,area:state.area,limit:10})
        })
    }
    render(){
        let {state,props}=this
        return <div className="new-test">
            <h2 className="title mb15">新碟上架
                <Group 
                    defaultValue={config[0].id} 
                    onChange={(e)=>{
                        let area=e.target.value
                        this.setState({
                            area,
                            current:1
                        },(e)=>{
                            this.props.newAlbumChange({
                                offset:0,
                                area:area,
                                limit:10
                            })
                        })
            }}>{
                config.map((value,key)=>{
                    return <Button 
                                value={value.id} 
                                key={value.id}>
                                    {value.name}
                           </Button>
                })}</Group></h2>
            <LoadingInfo 
                status={props.data.newAlbum.status} 
                component={
                    <NewAlbum 
                        data={props.data.newAlbum.content} 
                        total={props.data.newAlbum.total} 
                        current={state.current} 
                        onChange={this.onChange}/>} 
                        />
        </div>
    }
}