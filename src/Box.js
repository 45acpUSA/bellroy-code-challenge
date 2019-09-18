import React, { Component } from 'react'
import './App.css'

export default class Box extends Component {
  

  render(){
    const { value } = this.props
    return(
      <div>
        <div id="box">
          { value }
        </div>
      </div>
    )
  }
}