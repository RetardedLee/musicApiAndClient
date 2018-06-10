import React from 'react'
import Global from './global'
import Offical from './offical'
import LoadingInfo from 'component/common/LoadingInfo'
export default class Ranking extends React.Component{

    render(){
        let {state,props}=this
        return <div className="ranking">
                    <h2 className="title mb15">官方榜</h2>
                    <LoadingInfo component={<Offical data={props.data}/>} status={1} height={300}/>
                    <h2 className="title mb15">全球榜</h2>
                    <LoadingInfo component={<Global />} status={1} height={300}/>
                </div>
    }
}