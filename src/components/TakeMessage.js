import React, { Component } from 'react'

export default class TakeMessage extends Component {
    constructor(){
        super();
        this.state={
            inputValue:""
        }
    }
    handleInputMessage=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    send=()=>{
        console.log(this.state.inputValue)
        this.props.onSubmit({
          newMessage:this.state.inputValue
        })
    }
    render() {
    return (
      <div>
        <input onChange={this.handleInputMessage} type="text" placeholder='Type your Message Here'/>
        <button onClick={this.send}>Submit</button>
      </div>
    )
  }
}
