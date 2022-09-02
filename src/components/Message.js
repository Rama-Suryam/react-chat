import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    console.log(this.props.message)
    return (
      <div>
        <p></p>
      </div>
    )
  }
}
