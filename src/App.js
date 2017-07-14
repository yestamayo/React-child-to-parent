import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './Boton';
//import Child from './Child';

class App extends Component {

  constructor(props){
    super(props);

    this.changeTextBtn = this.changeTextBtn.bind(this);

    this.state = {
      text: 'Off',
      estado: false,
      count: 0
    }
    
  }

  changeTextBtn(){
      this.setState({
        count: this.state.count + 1,
        estado: !this.state.estado,
        text: this.state.estado ? 'Off' : 'On'
      });
  }

  triggerChildAlert(){
      this.refs.child.showAlert();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Primer ejemplo en React</h2>
        </div>
        <br/>
        <Boton action={this.changeTextBtn} ref="child"/>
        <p>Estado: {this.state.text}</p>
        <p>Clicks: {this.state.count}</p>
        <button onClick={this.triggerChildAlert.bind(this)}>Click on Parent do a func from child</button>
      </div>
    );
  }
}

export default App;
