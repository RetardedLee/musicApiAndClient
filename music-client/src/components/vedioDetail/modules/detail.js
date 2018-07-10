import React from 'react'
import moment from 'moment'
import {formatNumber} from 'utils/numberUtil'
 class Detail extends React.Component{
    render(){
        let{data}=this.props
        return <div>
            <h2>视频介绍</h2>
            <h3><span>发布时间:<i>{moment(data.publishTime).format("YYYY-MM-DD")}</i></span><span style={{marginLeft:20}}>播放次数:<i>{formatNumber(data.playTime)}</i></span></h3>
            <div className="desc">
                <p>简介:<span>{data.description}</span></p>
                <p className="tags"><span>标签:</span>{data.videoGroup.map((v,k)=>{
                    return <span key={v.id} style={{marginLeft:5,color:"#0a63a8"}}>{v.name}</span>
                })}</p>
            </div>
        </div>
    }
}
export default Detail