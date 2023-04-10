import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state={
        user:"",
        psw:"",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    send=()=>{
        let newData={
            username:this.state.user,password:this.state.psw
        }
        //console.log(this.state.user,this.state.psw)
        axios.post("http://65.0.100.29:2008/add",newData)
            .then((res)=>{
                console.log(res)
            })

        this.setState({
            user:"",
            psw:""
        })
    }
  render() {
    return (
      <div className='log'>
        <p><input className='user' value={this.state.user} name='user' onChange={this.handleChange} placeholder='Enter your user name'/></p>
        <p><input className='user' value={this.state.psw} name="psw" onChange={this.handleChange} placeholder='Enter your password'/></p>
        <button className='btn' onClick={this.send}>Login</button>
      </div>
    )
  }
}
