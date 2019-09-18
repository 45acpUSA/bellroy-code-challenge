import React, { Component } from 'react'
import Grid from './Grid.js'
import './App.css'

export default class App extends Component {
  render(){
    return(
      <div>
        <h1 id="title">Bellroy Robot</h1>
        <Grid />
      </div>
    )
  }
}
