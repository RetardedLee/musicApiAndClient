import React from 'react'
import {Link} from 'react-router-dom'
import formatSeconds from 'utils/formatSeconds'
 class ListSong extends React.Component{
     
    render(){
        let {tracks}=this.props.data

        return <div className="list-song">
            <table className="list-table">
                <thead>
                    <tr>
                        <th><p></p></th>
                        <th><p>操作</p></th>
                        <th><p>音乐标题</p></th>
                        <th><p>歌手</p></th>
                        <th><p>专辑</p></th>
                        
                        <th><p>时长</p></th>
                    </tr>
                </thead>
                <tbody>
                {tracks.map((v,i)=>{
                    return <tr key={i}>
                        <td ><p className="key">{i+1}</p></td>
                        <td><p className="opr">{v.st?<i className="iconfont icon-xihuan"></i>:<i className="iconfont icon-like-alt"></i>}</p></td>
                        <td ><p className="name" title={v.name}>{v.name}</p></td>
                
                <td><p className="artist">{v.ar.map((value,index)=>{
                    return <Link to={`/artist/${value.id}`} key={index} className="art" title={value.name}>{value.name}</Link>
                })}</p></td>
                        
                        <td><p className="album"><Link to={`/album/${v.al.id}`} title={v.al.name}>{v.al.name}</Link></p></td>
                        <td><p className="dura">{formatSeconds(v.dt)}</p></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    }
}
export default ListSong