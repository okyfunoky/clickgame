import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'
import TitleBar from './components/TitleBar'
import Card from './components/Card'
import data from './carddata.json'

export default class App extends Component {

  state ={
    data
  }

  render(){
    return <Card word={this.state.data[1].name}/>
  }
}


