import React from 'react'
 class AlbumDetail extends React.Component{
    render(){
        let {data}=this.props
        return <div className="album-detail">
            <h3>专辑介绍</h3>
            {
                data.description.split("\n").map((item,index)=>{
                    return <p key={index}>{item}</p>
                })
            }
        </div>
    }
}
export default AlbumDetail