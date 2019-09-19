import React, { Component } from 'react'
import Grid from './Grid.js'
import './App.css'

export default class App extends Component {
  render(){
    return(
      <div>
        <h1 id="title">Bellroy Robot</h1>
        <Grid />
        <br />
        <br />
        <div id="textbox">
          <p>You've designed a high-tech, hovering robot but it's running out of energy! Locate the battery and navigate the robot to the battery in order to recharge.</p>
          <h3>How To Play:</h3>
          <ol>
            <li>Click the Start button to initialize the game.</li>
            <li>Use the Arrow Keys to turn and move.</li>
            <li>Navigate to the square with the battery.</li>
            <li>Click the Reset button any time to clear the gameboard.</li>
          </ol>
        </div>
      </div>
    )
  }
}
