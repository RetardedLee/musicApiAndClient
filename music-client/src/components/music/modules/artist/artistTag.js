import React from 'react'
import Radio from 'component/common/radio'
import config from './artistTagConfig'
const Group=Radio.Group
const Button=Radio.Button
export default class ArtistTag extends React.Component{
    onChange(dataKey,event){
        var value=event.target.value
        if(this.props.onChange){
            this.props.onChange(dataKey,value)
        }
    }
    render(){
        return <div className="artist-tag">
            {config.map((v,k)=>{
                return <div className={`${v.dataKey} line-tag`} key={v.dataKey}><span className="title">{v.title}</span><Group onChange={this.onChange.bind(this,v.dataKey)} size="small" name={v.dataKey} defaultValue={v.list[0].id}>{v.list.map((v1,k1)=>{
                    return <Button value={v1.id} key={v1.id}>{v1.title}</Button>
                })}</Group></div>
            })}
        </div>
    }
}