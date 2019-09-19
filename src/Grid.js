import React, { Component } from 'react'
import Box from './Box.js'
import ArrowKeysReact from 'arrow-keys-react'
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
      direction: "down",
      display:
        <div id="robot">
          <div id="antenna"></div>
          <div id="headUpDown">
            <div id="leftEyeDown"></div>
            <div id="rightEyeDown"></div>
            <div id="mouthDown"></div>
          </div>
          <div id="bodyUpDown">
            <div id="rightArmUpDown"></div>
            <div id="torsoUpDown"></div>
            <div id="leftArmUpDown"></div>
          </div>
          <div id="gravitationRingUpDown"></div>
        </div>,
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

  handleUpArrow = () => {
    const { board, direction, robotIndex, batteryIndex } = this.state
    let robotPosition
    if (direction === "up" && robotIndex > 4) {
      robotPosition = robotIndex - 5
      let updatedBoard = board.map((value, index) => {
        if (index === robotPosition) {
          return value = 1
        } else if (index === batteryIndex) {
          return value = 2
        }
      })
      this.setState({ board: updatedBoard, robotIndex: robotPosition })
    } else if (direction === "down" || direction === "left" || direction === "right") {
      this.setState({
        direction: "up",
        display:
          <div id="robot">
            <div id="antenna"></div>
            <div id="headUpDown"></div>
            <div id="bodyUpDown">
              <div id="rightArmUpDown"></div>
              <div id="torsoUpDown"></div>
              <div id="leftArmUpDown"></div>
            </div>
            <div id="gravitationRingUpDown"></div>
          </div>
      })
    }
  }

  handleDownArrow = () => {
    const { board, direction, robotIndex, batteryIndex } = this.state
    let robotPosition
    if (direction === "down" && robotIndex < 20) {
      robotPosition = robotIndex + 5
      let updatedBoard = board.map((value, index) => {
        if (index === robotPosition) {
          return value = 1
        } else if (index === batteryIndex) {
          return value = 2
        }
      })
      this.setState({ board: updatedBoard, robotIndex: robotPosition })
    } else if (direction === "up" || direction === "left" || direction === "right") {
      this.setState({
        direction: "down",
        display:
          <div id="robot">
            <div id="antenna"></div>
            <div id="headUpDown">
              <div id="leftEyeDown"></div>
              <div id="rightEyeDown"></div>
              <div id="mouthDown"></div>
            </div>
            <div id="bodyUpDown">
              <div id="rightArmUpDown"></div>
              <div id="torsoUpDown"></div>
              <div id="leftArmUpDown"></div>
            </div>
            <div id="gravitationRingUpDown"></div>
          </div>
      })
    }
  }

  handleLeftArrow = () => {
    const { board, direction, robotIndex, batteryIndex } = this.state
    let robotPosition
    if (direction === "left" && /[^05]/.test(robotIndex)) {
      robotPosition = robotIndex - 1
      let updatedBoard = board.map((value, index) => {
        if (index === robotPosition) {
          return value = 1
        } else if (index === batteryIndex) {
          return value = 2
        }
      })
      this.setState({ board: updatedBoard, robotIndex: robotPosition })
    } else if (direction === "up" || direction === "down" || direction === "right") {
      this.setState({
        direction: "left",
        display:
          <div id="robot">
            <div id="antenna"></div>
            <div id="headLeftRight"></div>
            <div id="bodyLeftRight">
              <div id="rightArmLeftRight"></div>
              <div id="torsoLeftRight"></div>
              <div id="leftArmLeftRight"></div>
            </div>
            <div id="gravitationRingLeftRight"></div>
          </div>
      })
    }
  }

  handleRightArrow = () => {
    const { board, direction, robotIndex, batteryIndex } = this.state
    let robotPosition
    if (direction === "right" && /[^49]/.test(robotIndex)) {
      robotPosition = robotIndex + 1
      let updatedBoard = board.map((value, index) => {
        if (index === robotPosition) {
          return value = 1
        } else if (index === batteryIndex) {
          return value = 2
        }
      })
      this.setState({ board: updatedBoard, robotIndex: robotPosition })
    } else if (direction === "up" || direction === "down" || direction === "left") {
      this.setState({
        direction: "right",
        display:
          <div id="robot">
            <div id="antenna"></div>
            <div id="headLeftRight"></div>
            <div id="bodyLeftRight">
              <div id="rightArmLeftRight"></div>
              <div id="torsoLeftRight"></div>
              <div id="leftArmLeftRight"></div>
            </div>
            <div id="gravitationRingLeftRight"></div>
          </div>
      })
    }
  }

  render(){
    const { board, display } = this.state
    ArrowKeysReact.config({
      left: () => {
        this.handleLeftArrow()
      },
      right: () => {
        this.handleRightArrow()
      },
      up: () => {
        this.handleUpArrow()
      },
      down: () => {
        this.handleDownArrow()
      }
    })
    const grid = board.map((value, index) => {
      let piece
      if (value === 1) {
        piece = display
      } else if (value === 2) {
        piece =
          <img src={require("./battery.png")} alt="battery" className="img-responsive"/>
      }
      return(
        <Box
          key={ index }
          piece={ piece }
        />
      )
    })
    window.onclick = function() {
      document.getElementById("grid").focus()
    }

    return(
      <div>
        <div id="grid" {...ArrowKeysReact.events} tabIndex="1">
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