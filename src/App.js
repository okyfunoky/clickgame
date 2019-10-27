import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import TitleBar from './components/TitleBar'
import ScoreBar from './components/ScoreBar'
import Card from './components/Card'
import data from './carddata.json'
import shuffle from './util/util.js'
import { tsMethodSignature } from '@babel/types';

export default class App extends Component {

  state = {
    data,
    clickedImages: [],
    score: 0,
    highScore: 0,
  }

  cardOnClick = id => {

    const randoArray = shuffle(this.state.data);


    if (this.state.clickedImages.includes(id)) {
      this.resetGame();
      alert("Loser!")
    } else if (this.state.score >= 10) {
      //win
      this.resetGame();
      alert("You Win, please stop clicking me...")
    } else {

      //push id to used
      let usedImages = this.state.clickedImages;
      usedImages.push(id);

      let newScore = this.state.score;
      newScore++;

      this.setState({ score: newScore }, () => {
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score })
        }
      })

      this.setState({ clickedImages: usedImages })
      console.log("Score is ..." + this.state.score)
    }
    this.setState({ data: randoArray });

  }

  resetGame() {
    this.setState({score: 0});
    this.setState({clickedImages: []})
  }

  render() {
    return (
      <Wrapper>
        <TitleBar>
          React Clicky Game
          <ScoreBar score={this.state.score} highScore={this.state.highScore}>
          </ScoreBar>
        </TitleBar>

        {this.state.data.map(item => (
          <Card data={item} onClick={this.cardOnClick}></Card>
        ))}
      </Wrapper>
    )
  }
}


