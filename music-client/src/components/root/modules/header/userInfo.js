import React from 'react'
import Dropdown from 'rc-dropdown'
import Dialog  from 'rc-dialog';
import 'rc-dropdown/assets/index.css';
import 'rc-dialog/assets/index.css';
import defAva from "static/defaultAva.jpg"
export default class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:false,
            cell:false,
            cellInput:"",
            mailInput:"",
            cellPassInput:"",
            mailPassInput:""
        }
    }
    onVisibleChange=(e)=>{
        
    }
    showLogin=(a)=>{
        console.log(a)
        this.setState({
            [a]:true
        })
    }
    onEmailClose=(e)=>{
        this.setState({
            email:false
        })
    }
    onCellClose=(e)=>{
        this.setState({
            cell:false
        })
    }
    login=(e)=>{
        let input,pass
        if(e==="cell"){
            input=this.state.cellInput
            pass=this.state.cellPassInput
        }else{
            input=this.state.mailInput
            pass=this.state.mailPassInput
        }
        this.props.login(e,input,pass)
        this.setState({
            [e]:false,
            cellInput:"",
            mailInput:"",
            cellPassInput:"",
            mailPassInput:""
        })
    }
    cellInput=(e)=>{
        var value=e.target.value
        this.setState({
            cellInput:value
        })
    }
    mailInput=(e)=>{
        var value=e.target.value
        this.setState({
            mailInput:value
        })
    }
    cellPassInput=(e)=>{
        var value=e.target.value
        this.setState({
            cellPassInput:value
        })
    }
    mailPassInput=(e)=>{
        var value=e.target.value
        this.setState({
            mailPassInput:value
        })
    }
    render(){
        let {props,state}=this
        return  <span className="user-info">
                        <Dialog
                        visible={this.state.cell}
                        animation="zoom"
                        maskAnimation="fade"
                        onClose={this.onEmailClose}
                        style={{width:300}}
                        destroyOnClose={true}
                        wrapClassName={"center"}
                        bodyStyle={{boxShadow: "rgba(0,0,0,.5) 0 0 20px",padding:40,paddingBottom:100}}
                        maskStyle={{width:1000,height:650,left:"50%",top:"50%",transform:"translate(-50%,-50%)",background:"rgba(255,255,255,0)"}}
                        >
                        <p className="icon"><i className="iconfont icon-shoujidenglu"></i></p>
                        <p className="relative"><i className="iconfont icon-shoujidenglu1" ></i><input placeholder="请输入手机号" type="cellphone" className="log-ipt cell" onInput={this.cellInput} value={state.cellInput}/></p>
                        <p className="relative"><i className="iconfont icon-mima-copy"></i><input placeholder="请输入密码" type="password" className="log-ipt pass" onInput={this.cellPassInput} value={state.cellPassInput}/></p>
                        <p className="log-btn"><button onClick={this.login.bind(this,"cell")}>登录</button></p>
                    </Dialog>
                    <Dialog
                        visible={this.state.email}
                        animation="zoom"
                        maskAnimation="fade"
                        onClose={this.onCellClose}
                        destroyOnClose={true}
                        wrapClassName={"center"}
                        style={{width:300}}
                        bodyStyle={{boxShadow: "rgba(0,0,0,.5) 0 0 20px",padding:40,paddingBottom:100}}
                        maskStyle={{width:1000,height:650,left:"50%",top:"50%",transform:"translate(-50%,-50%)",background:"rgba(255,255,255,0)"}}
                        >
                        <p className="icon"><i className="iconfont icon-shoujidenglu"></i></p>
                        <p className="relative"><i className="iconfont icon-mail"></i><input placeholder="请输入邮箱" type="cellphone" className="log-ipt email" onInput={this.mailInput} value={state.mailInput}/></p>
                        <p className="relative"><i className="iconfont icon-mima-copy"></i><input placeholder="请输入密码" type="password" className="log-ipt pass" onInput={this.mailPassInput} value={state.mailPassInput}/></p>
                        <p className="log-btn"><button onClick={this.login.bind(this,"email")}>登录</button></p>
                    </Dialog>
                    {
                        props.data.status===1?(<span>
                        <img className="user-avatar" src={props.data.content.avatarUrl} onError={(e)=>{e.target.src=defAva}} alt="头像"/>
                        <span className="user-name">{props.data.content.nickname}</span>
                    </span>):(<Dropdown
                                trigger={['click']}
                                overlay={<ul className="login-choose">
                                    <li key="cell" onClick={this.showLogin.bind(this,"cell")}>手机登录</li>
                                    <li key="email" onClick={this.showLogin.bind(this,"email")}>邮箱登录</li>
                                </ul>}
                                animation="slide-up"
                                onVisibleChange={this.onVisibleChange}
                                >
                                    <span onClick={this.props.onAvaClick}>
                                        <img className="user-avatar" src={defAva} onError={(e)=>{e.target.src=defAva}} alt="头像"/>
                                    <span className="user-name" >未登录</span>
                                    </span>
                                </Dropdown>)
                    }
                    
                </span>
                
               
    }
}