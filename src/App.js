import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import TitleBar from './components/TitleBar'
import ScoreBar from './components/ScoreBar'
import Card from './components/Card'
import data from './carddata.json'
import shuffle from './util/util.js'

export default class App extends Component {

  state = {
    data
  }

  cardOnClick = id => {
    
    const randoArray = shuffle(this.state.data);
    
    this.setState({randoArray});
  }

  render() {
    return (
      <Wrapper>
        <TitleBar>React Clicky Game</TitleBar>
        <ScoreBar>Score</ScoreBar>
        {this.state.data.map(item => (
          <Card data={item} onClick={this.cardOnClick}></Card>
        ))}
      </Wrapper>
    )
  }
}


