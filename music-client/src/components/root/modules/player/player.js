import React from "react";
import "./player.scss";
import img from "static/star.jpg";
import mp3 from 'static/demo.mp3'
import formatSeconds from 'utils/formatSeconds'
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import Lyric from 'lyric-parser'

const modeMap = [{
    icon: "icon-shunxubofang-",
    name: "顺序播放"
  },
  {
    icon: "icon-danquxunhuan",
    name: "单曲循环"
  },
  {
    icon: "icon-liebiaoxunhuan",
    name: "列表循环"
  },
  {
    icon: "icon-bofangye-caozuolan-suijibofang",
    name: "随机播放"
  }
]
export default class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      status:0, //0 暂停  1 播放
      mode:0, //模式 0 顺序 1 单曲 2 列表 3随机
      time:0,      //当前播放时间
      volume:1, //音量
      duration:0, //歌曲时间
      tipVisible:false, //是否显示模式tip,
      loading:false, //因为网络原因中途加载
      playList:[],
      lyric:null
    }
    this.audio=null
    this.volume=1
  }
  timeUpdate=(e)=>{
    var currentTime=parseFloat(e.target.currentTime)
    console.log(parseInt(currentTime * 1000))
    this.setState({
      time:currentTime
    })
  }
  timeChange=(event)=>{
    let time=parseFloat(event.target.value)
    this.setState({
      time:time
    },()=>{
      this.state.lyric.seek(time)
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
  // src改变时触发
  srcChange=(e)=>{
    this.setState({loading:true,status:0,lyric:null},()=>{
      // 重新加载资源
      this.audio.load()
    })
  }
  meteDataLoaded=(e)=>{
    // 资源加载完先获取歌曲的时长
    
    let duration=e.target.duration
    let volume=e.target.volume
    let lyric=null
    // 初始化歌词
    if(this.props.musicLyric.status===1){
       lyric= new Lyric(this.props.musicLyric.content.lyric, (e)=>{console.log(e)})
       console.log(lyric)
       this.setState({lyric})
    }
    this.audio.play()
    lyric.play()
    this.setState({duration:duration,status:1,volume})
    
  }
  getBgSize=(part,total)=>{
    // 进度条已播放部分背景
      return `${parseFloat(part / total*100).toFixed(2)}% 100%`
    }
    // 切换播放模式
  onChangeMode=()=>{
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
  // 当中途加载，可以播放之后触发
  onPlaying=(e)=>{

    this.setState({
      loading:false
    },()=>{
      this.audio.play();
    })
  }
  // 中途需要加载
  onWaiting=(e)=>{
    if(this.state.lyric !== null){
      this.state.lyric.stop()
    }
    this.setState({
      loading:true
    },()=>{
      this.audio.pause();
    })
  }
// 暂停播放切换
  togglePlay=(e)=>{
    if(this.props.musicUrl.status !==1){
      return
    }
    if(this.state.status===1){
     
      this.setState({
        status:0
      },()=>{
        if(this.state.lyric !== null){
          this.state.lyric.stop()
        }
        this.audio.pause()
      })
    }else{
     
      this.setState({
        status:1
      },()=>{
        if(this.state.lyric !== null){
          this.state.lyric.play()
        }
        this.audio.play()
      })
    }
  }
  // 下一首或者播放完以后
  nextMusic=()=>{
    this.setState({
      status:0,
      lyric:null
    })
  }
  prevMusic=(e)=>{
    // 上一首
    this.setState({
      status:0
    })
  }
  render() {
    let { state, props } = this;
    let th=this
    return (
      <div className="app-player">
      <video width="0" height="0"
          src={props.musicUrl.status===1?props.musicUrl.content[0].url:""}   
          onChange={this.srcChange} 
          onCanPlay={this.meteDataLoaded} 
          style={{overflow:"hidden",position:"absolute"}} 
          step={1} 
          onTimeUpdate={this.timeUpdate}
          onPlaying={this.onPlaying} 
          ref={(e)=>{this.audio=e}}
          onWaiting={this.onWaiting}
          onEnded={this.nextMusic}
      >
      </video>
        <div className="controls">
          <div className="control-play">
            <i title="上一首" className="iconfont icon-zhutishangyiqu" onClick={this.prevMusic}/>
            <i className={`iconfont ${state.status == 0?"icon-bofang":"icon-zanting"}`} title={`${state.status == 0?"播放":"暂停"}`} onClick={this.togglePlay}/>
            <i className="iconfont icon-zhutixiayiqu" title="下一首" onClick={this.nextMusic}/>
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
              onVisibleChange={this.onChangeMode}
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
              {state.playList.length}
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
            <p>{props.musicInfo.status===1?props.musicInfo.content.name:""}</p>
            <p>{props.musicInfo.status===1?props.musicInfo.content.song.artists[0].name:""}</p>
          </div>
        </div>
        <div className="plus">全屏播放器</div>
      </div>
    );
  }
}
