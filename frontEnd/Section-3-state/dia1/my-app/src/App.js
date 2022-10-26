import React from 'react';
import './App.css';


const color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'


class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick() {
    document.body.style.backgroundColor = color
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(this.state.numeroDeCliques)
  }

  
  render() {
    console.log(this);
    return (
      <>
      <button onClick={this.handleClick}>Click Here!</button>
      <h1>{this.state.numeroDeCliques}</h1>
      </>
    )
  }
}


export default App;
