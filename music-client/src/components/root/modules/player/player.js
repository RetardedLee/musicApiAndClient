import React from "react";
import "./player.scss";
import img from "static/star.jpg";
import mp3 from 'static/demo.mp3'
import formatSeconds from 'utils/formatSeconds'
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
const modeMap=[{icon:"icon-shunxubofang-",name:"顺序播放"},{icon:"icon-danquxunhuan",name:"单曲循环"},{icon:"icon-liebiaoxunhuan",name:"列表循环"},{icon:"icon-bofangye-caozuolan-suijibofang",name:"随机播放"}]
export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      src:"",
      status:0, //0 暂停  1 播放
      mode:0, //模式 0 顺序 1 单曲 2 列表 3随机
      time:0,      //当前播放时间
      volume:1, //音量
      duration:0, //歌曲时间
      tipVisible:false //是否显示模式tip
    }
    this.audio=null
    this.volume=1
  }
  timeUpdate=(e)=>{
    var currentTime=parseFloat(e.target.currentTime)
    this.setState({
      time:currentTime
    })
  }
  timeChange=(event)=>{
    let time=parseFloat(event.target.value)
    this.setState({
      time:time
    },()=>{
      this.audio.currentTime=time
    })
  }
  volumeChange=(event)=>{
    let volume=parseFloat(event.target.value)
    this.setState({
      volume:volume
    },()=>{
      this.audio.volume=volume;
      this.volume=volume
    })
  }
  volumeClick=()=>{
    if(this.state.volume){
      this.volume=this.state.volume
      this.setState({
        volume:0
      },()=>{
        this.audio.volume=0
      })
    }else{
      if(!this.volume){
        this.volume=0.3
      }
      this.setState({
        volume:this.volume
      },()=>{
        this.audio.volume=this.volume
      })
    }
  }
  meteDataLoaded=(e)=>{
    // 资源加载完先获取歌曲的时长
    let duration=e.target.duration
    this.setState({duration:duration})
  }
  getBgSize=(part,total)=>{
      return `${parseFloat(part / total*100).toFixed(2)}% 100%`
    }
    onVisibleChange=()=>{
      var mode=this.state.mode
      if(mode==3){
        mode=0
      }else{
        mode +=1
      }
      if(!this.state.tipVisible){
        this.setState({
          tipVisible:true,
          mode:mode
        },()=>{
          setTimeout(()=>{
            this.setState({tipVisible:false})
          },500)
        })
      }
    }
  render() {
    let { state, props } = this;
    let th=this
    return (
      <div className="app-player">
      <video width="0" height="0" src={mp3}  onLoadedMetadata={this.meteDataLoaded} style={{overflow:"hidden",position:"absolute"}} step={1} onTimeUpdate={this.timeUpdate} ref={(e)=>{this.audio=e}}></video>
        <div className="controls">
          <div className="control-play">
            <i title="上一首" className="iconfont icon-zhutishangyiqu" />
            <i className={`iconfont ${state.status == 0?"icon-bofang":"icon-zanting"}`} title={`${state.status == 0?"播放":"暂停"}`} />
            <i className="iconfont icon-zhutixiayiqu" title="下一首" />
          </div>
          <div className="time">
            <span>{formatSeconds(state.time)}</span>
            <input type="range" className="progress" min={0} value={Math.ceil(state.time)} max={state.duration} onChange={this.timeChange} style={{backgroundSize:th.getBgSize(state.time,state.duration)}}/>
            <span>{formatSeconds(state.duration)}</span>
          </div>
          <div className="col">
            {<i className={`iconfont ${state.volume?"icon-yinliang":"icon-jingyin"}`} onClick={this.volumeClick}/>}
            <span><input type="range" className="progress" min={0} value={state.volume} step={0.1} max={1} onChange={this.volumeChange} style={{backgroundSize:th.getBgSize(state.volume,1)}}/></span>
          </div>
          <div className="mode">
          <Tooltip
              overlay={<span>{modeMap[state.mode].name}</span>}
              placement={"top"}
              visible={state.tipVisible}
              destroyTooltipOnHide={true}
              trigger={"click"}
              onVisibleChange={this.onVisibleChange}
          >
           <i className={`iconfont ${modeMap[state.mode].icon}`} />
        </Tooltip>
            
            {/* <i className="iconfont icon-danquxunhuan" />
            <i className="iconfont icon-danquxunhuan" />
            <i className="iconfont icon-danquxunhuan" /> <i className="iconfont icon-danquxunhuan" />*/}
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
