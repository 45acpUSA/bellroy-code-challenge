import React, { Component } from 'react'
import Box from './Box.js'
import './App.css'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      board:
        [0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0],
      robotIndex: 0,
      batteryIndex: 0,
    }
  }

  handleStartButton = () => {
    const { board, robotIndex, batteryIndex } = this.state
    if (batteryIndex === 0 && robotIndex === 0) {
      let robotPosition = Math.floor(Math.random() * 25)
      let batteryPosition
      do {
        batteryPosition = Math.floor(Math.random() * 25)
      }
      while (robotPosition === batteryPosition)
      let gameBoard = board.map((value, index) => {
        if (index === robotPosition) {
          return value = 1
        } else if (index === batteryPosition) {
          return value = 2
        } else {
          return value
        }
      })
      this.setState({
        board: gameBoard,
        robotIndex: robotPosition,
        batteryIndex: batteryPosition,
      })
    }
  }

  handleResetButton = () => {
    const { robotIndex, batteryIndex } = this.state
    
  }

  render(){
    const { board } = this.state
    const grid = board.map((value, index) => {
      return(
        <Box
        value={ value }
        index={ index }
        handleClick={ this.handleClick }
        board={ board }
        />
      )
    })
    return(
      <div>
        <div id="grid">
          { grid }
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md">
              <button type="button" className="btn btn-primary" onClick={ this.handleStartButton } id="startButton">Start</button>
              <button type="button" className="btn btn-danger" id="resetButton">Reset</button>
              <button type="button" className="btn btn-success" id="nextGameButton">Next Game</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}