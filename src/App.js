import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearBtn from './components/ClearButton/ClearBotton';
import * as math from 'mathjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  clearInputHandler = () => {
    this.setState({
      input: ''
    });
  }

  acceptInputHandler = (val) => {
    this.setState({
      input: this.state.input + val
    });
  }
  equalHandler = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  }

  clearLastChar = () => {
    const { input } = this.state;
    this.setState({
      input: this.state.input.substring(0, input.length - 1) || '0'
    })
  }

  

  render() {
    return (
      <div className="App">
        <div className="Calc-Wrapper">
          <div className="row">
            <Input input={this.state.input}></Input>
          </div>

          <div className="row">
            <Button click={this.clearLastChar}>C</Button>
            <Button >%</Button>
            <Button>69</Button>
            <Button>/66</Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>7</Button>
            <Button click={this.acceptInputHandler}>8</Button>
            <Button click={this.acceptInputHandler}>9</Button>
            <Button click={this.acceptInputHandler}>/</Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>4</Button>
            <Button click={this.acceptInputHandler}>5</Button>
            <Button click={this.acceptInputHandler}>6</Button>
            <Button click={this.acceptInputHandler}>*</Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>1</Button>
            <Button click={this.acceptInputHandler}>2</Button>
            <Button click={this.acceptInputHandler}>3</Button>
            <Button click={this.acceptInputHandler}>+</Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>.</Button>
            <Button click={this.acceptInputHandler}>0</Button>
            <Button click={() => this.equalHandler()}>=</Button>
            <Button click={this.acceptInputHandler}>-</Button>
          </div>

          <div className="row">
            <ClearBtn clearHandler={this.clearInputHandler}>Clear</ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
