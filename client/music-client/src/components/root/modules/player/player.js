import React from "react";
import "./player.scss";
import img from "static/star.jpg";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { state, props } = this;
    console.log(props);
    return (
      <div className="app-player">
        <div className="controls">
          <div className="control-play">
            <i title="上一首" className="iconfont icon-zhutishangyiqu" />
            <i className="iconfont icon-zanting" title="播放" />
            {/* <i className="iconfont icon-zanting" title="播放"></i> */}
            <i className="iconfont icon-zhutixiayiqu" title="下一首" />
          </div>
          <div className="time">
            <span>00:00</span>
            <input type="range" className="progress" min={0} value={0}/>
            <span>4:59</span>
          </div>
          <div className="col">
            <i className="iconfont icon-yinliang" />
            {/* <i className="iconfont icon-jingyin" /> */}
            <span><input type="range" className="progress" min={0} value={0}/></span>
          </div>
          <div className="mode">
            <i className="iconfont icon-danquxunhuan" />
          </div>
          <div className="lyric">
            <i>词</i>
          </div>
          <div className="list">
            <i className="iconfont icon-bofangliebiao">
              <span
                style={{
                  background: "#ccc",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  fontSize: 12,
                  paddingRight: 5,
                  verticalAlign: "middle"
                }}
              >
                138
              </span>
            </i>
          </div>
        </div>
        <div className="mini">
          <div className="poster">
            <div className="model">
              <i className="iconfont icon-quanping" />
            </div>
            <img src={img} />
          </div>
          <div className="info">
            <p>李鹏杰</p>
            <p>偶像练习生</p>
          </div>
        </div>
        <div className="plus">全屏播放器</div>
      </div>
    );
  }
}
