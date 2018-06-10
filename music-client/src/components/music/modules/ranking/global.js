import React from 'react'
import titleConft from './titleConfig'
import {Link} from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
export default class Global extends React.Component{

    render(){
        return <ul className="global rec-list">
            {titleConft.global.map((v,k)=>{
                return <li className="rec-item" key={v.id}>
                <Link to={`/playlist/${v.id}`} className="block">
                    <p className="relative"><img src={`${v.img}`} alt={v.title}/>
                    <span className="play"><i className="iconfont icon-bofang1"></i></span>
                    </p>
                    <p className="desc" title={v.title}>{v.title}</p>
                </Link>
            </li>
            })}
        </ul>
    }
}