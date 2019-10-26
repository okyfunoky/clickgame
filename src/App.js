import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import TitleBar from './components/TitleBar'
import Card from './components/Card'
import data from './carddata.json'
import { isMetaProperty } from '@babel/types';

export default class App extends Component {

  state = {
    data
  }

  render() {
    return (
      <Wrapper>
        <TitleBar>React Clicky Game</TitleBar>
        {this.state.data.map(item => (
          <Card data={item}></Card>
        ))}
      </Wrapper>
    )
  }
}


