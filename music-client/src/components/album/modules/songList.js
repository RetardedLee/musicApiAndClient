import React from 'react'
import {Link} from 'react-router-dom'
import formatSeconds from 'utils/formatSeconds'
 class SongList extends React.Component{
    render(){
        let {data}=this.props
        return <div className="song-list">
        
        <table className="list-table">
                <thead>
                    <tr>
                        <th><p></p></th>
                        <th><p>操作</p></th>
                        <th><p>音乐标题</p></th>
                        <th><p>歌手</p></th>
                        <th><p>时长</p></th>
                        <th><p>热度</p></th>
                    </tr>
                </thead>
                <tbody>
                {data.map((v,i)=>{
                    return <tr key={i}>
                        <td ><p className="key">{i+1}</p></td>
                        <td><p className="opr">{<i className="iconfont icon-like-alt"></i>}</p></td>
                        <td ><p className="name" title={v.name}>{v.name}</p></td>
                
                <td><p className="artist">{v.ar.map((value,index)=>{
                    return <Link to={`/artist/${value.id}`} key={index} className="art" title={value.name}>{value.name}</Link>
                })}</p></td>
                        
                       
                        <td><p className="dura">{formatSeconds(v.dt)}</p></td>
                        <td><div className="hot">
                                <p className="progress" style={{width:1.2 * v.pop}}></p>
                        </div></td>
                    </tr>
                })}
                </tbody>
            </table>
        
        </div>
    }
}
export default SongList