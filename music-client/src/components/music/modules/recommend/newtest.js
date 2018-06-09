import React from 'react'
export default class Newtest extends React.Component{

    render(){
        let {props,state}=this
        if(props.data.status===1){
            return <ul className="newTest">
                        {props.data.content.map((v,k)=><li key={v.id} className="item">
                            <p className="rank">{k+1}</p>
                            <div className="relative">
                                <img src={v.song.album.blurPicUrl} className="block"/>
                                <i className="iconfont icon-bofang1"></i>
                            </div>
                            <div className="info">
                                <h3 className="name" title={v.name}>{v.name}</h3>
                                <h4 className="artist" title={v.song.artists[0].name}>{v.song.artists[0].name}</h4>
                            </div>
                            
                        </li>)}
                    </ul>
        }
        return null
        
    }
}