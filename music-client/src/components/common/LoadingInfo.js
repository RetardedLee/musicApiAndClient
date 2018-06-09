import React from 'react'
import './index.scss'
export default class LoadingInfo extends React.Component{
    static defaultProps={
        width:"100%",
        height:200
    }
    render(){
        let {status,component,width,height}=this.props
       
        switch(status){
            case 1:
            return component
            case -1:
            return <div className="noData nodata" style={{width:width,height:height}}>
                <div><span><i className="iconfont icon-wushuju-"></i>暂时没有数据哦~</span></div>
            </div>
            case -5:
            return <div className="noData error" style={{width:width,height:height}}>
                <div><span><i className="iconfont icon-chucuo"></i>出错啦，请稍后再试~</span></div>
            </div>
            case 0:
            return <div className="noData loading" style={{width:width,height:height}}>
                <div><span><i className=""></i>载入中...</span></div>
            </div>
            default:
            return null
        }
    }
}