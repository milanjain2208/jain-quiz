import './App.css';
import Symbol from './Components/Symbol'
import Question from './Components/Question'
import Options from './Components/Options'
import React from 'react';
import {shuffle, tirthankar,tirthIndex} from './Utility'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currIndex : 0,
      correctAns: 0,
      option : shuffle([tirthankar[tirthIndex[0]],tirthankar[tirthIndex[1]], tirthankar[tirthIndex[2]], tirthankar[tirthIndex[3]]]),
      selected: false
    }
    this.checkAndUpdate = this.checkAndUpdate.bind(this);
  }
  checkAndUpdate(name) {
    this.setState(prevState => ({
      correctAns: name===tirthankar[tirthIndex[prevState.currIndex]] ? prevState.correctAns+1: prevState.correctAns,
      selected : true
    }))
    setTimeout(() => {
      this.setState((prevState) => {
        const newIndex = prevState.currIndex+1
        return {
          currIndex : newIndex,
          selected: false,
          option: shuffle([tirthankar[tirthIndex[newIndex%24]],tirthankar[tirthIndex[(newIndex+1)%24]], tirthankar[tirthIndex[(newIndex+2)%24]], tirthankar[tirthIndex[(newIndex+3)%24]]]),
        }
      });
    }, 500);
  }
  render() {
    const currTirth = tirthankar[tirthIndex[this.state.currIndex]]
    const currIndex = this.state.currIndex
    if (currIndex<=23) {
      return (
        <div className="App">
            <Question statement="Which Tirthankar does this symbol belong to?"/>
            <Symbol currIndex={this.state.currIndex}/>
            <Options option={this.state.option} selected={this.state.selected} currTirth={currTirth} action={this.checkAndUpdate}/>
        </div>
      )
    }
    const correctAns = this.state.correctAns;
    let message
    if(correctAns<15) {
      message = "You can do better than this"
    }
    else if(correctAns>=15 && correctAns<=20) {
      message = "Great! There is still room for improvement"
    }
    else {
      message = "Awesome! Keep it up"
    }
    return (
      <div className="center">
            <h1>{message}</h1>
            <h2>Your got <span style={{color: "#276127"}}> {correctAns} correct</span> answers.</h2>
      </div>
    )
  }
}

export default App;
