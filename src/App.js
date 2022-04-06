import React, {Component} from 'react'

import Header from "./components/Header";
import Card from "./components/Card";
import Scroll from './components/Scroll';
import Footer from './components/Footer';

import "./App.css";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      pokemonName: 'Pikachu'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Scroll>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Scroll>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
