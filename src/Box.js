import React, { Component } from 'react'
import './App.css'

export default class Box extends Component {
  

  render(){
    const { piece } = this.props
    return(
      <div>
        <div id="box">
          { piece }
        </div>
      </div>
    )
  }
}