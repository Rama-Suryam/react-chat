import React, { Component } from 'react'
import TakeMessage from './TakeMessage'
import Message from './Message'
export default class MessageList extends Component {
constructor(){
  super();
  this.state={
    list:[]
  }
}
addMessage=(currMessage)=>{
console.log("new Messasge from Take Message Component")
console.log(currMessage.newMessage)
this.setState({
  list:[...this.state.list,currMessage]
})
}
  render() {
    return (
      <div>
        <TakeMessage onSubmit={this.addMessage}/>
        {
          this.state.list.map((m)=>(
            <Message message={m.new}/>
          ))
        }
      </div>
    )
  }
}
