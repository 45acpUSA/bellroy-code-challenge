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
      success: false,
    }
  }

  handleStart = () => {
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

  handleReset = () => {
    const { robotIndex, batteryIndex } = this.state
    if (robotIndex !== 0 || batteryIndex !== 0) {
      this.setState({
        board:
        [0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0,
         0, 0, 0, 0, 0],
      robotIndex: 0,
      batteryIndex: 0,
      success: false,
      })
    }
  }

  //Check functionality after completing win condition
  handleNextGame = () => {
    const { success } = this.state
    if (success) {
      this.handleStart()
    }
  }

  render(){
    const { board } = this.state
    const grid = board.map((value, index) => {
      let piece
      if (value === 1) {
        piece = 
          <div id="robot">
            <div id="antenna"></div>
            <div id="head">
              <div id="leftEye"></div>
              <div id="rightEye"></div>
              <div id="mouth"></div>
            </div>
            <div id="torso"></div>
            <div id="leftArm"></div>
            <div id="rightArm"></div>
            <div id="foot"></div>
          </div>
      } else if (value === 2) {
        piece =
          <img src={require("./battery.png")} alt="battery" className="img-responsive"/>
      }
      return(
        <Box
        piece={ piece }
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
              <button type="button" className="btn btn-primary" onClick={ this.handleStart } id="startButton">Start</button>
              <button type="button" className="btn btn-danger" onClick={ this.handleReset } id="resetButton">Reset</button>
              <button type="button" className="btn btn-success" onClick={ this.handleNextGame } id="nextGameButton">Next Game</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}