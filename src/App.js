import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearBtn from './components/ClearButton/ClearBotton';
import * as math from 'mathjs';


let PI = Math.PI;
const sinPositiveRange = [PI / 2];
const sinNegativeRange = [-PI / 2];
//const sinRange = [...sinNegativeRange, ...sinPositiveRange];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  //clear input field
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
  //result method =
  equalHandler = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  }

  //clearing one char at a time
  clearLastCharHandler = () => {
    const { input } = this.state;
    this.setState({
      input: this.state.input.substring(0, input.length - 1) || ''
    })
  }
  //percentage
  inputPercentHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const currentValue = parseFloat(input).toFixed(14)
    if (currentValue === 0) {
      return;
    }
    const fixedDigits = input.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(input) / 100;
    this.setState({
      input: String(newValue.toFixed(fixedDigits.length + 2))
    });
  }
  //+ve and -ve
  toggleSignHandler = () => {
    const { input } = this.state
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input) * -1;
    this.setState({
      input: String(newValue)
    });
  }
  //square root
  sqrtHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.sqrt(newValue).toFixed(14);
    this.setState({
      input: newValueSqrt
    });
  }
  //power
  powerHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.pow(newValue, 2).toFixed(14);
    this.setState({
      input: newValueSqrt
    });
  }
  //sine
  sinHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.sin(newValue * Math.PI / 180).toFixed(14);
    this.setState({
      input: newValueSqrt
    });
  }
  //cosine
  cosHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.cos(newValue * Math.PI / 180).toFixed(14);
    this.setState({
      input: newValueSqrt
    });
  }
  //tangent
  tanHandler = () => {
    const { input } = this.state;
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.tan(newValue * Math.PI / 180).toFixed(14);
    this.setState({
      input: newValueSqrt
    });

  }
  //logarithm
  logHandler = () => {
    const { input } = this.state
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueSqrt = Math.log10(newValue).toFixed(14);
    this.setState({
      input: newValueSqrt
    });
  }
  //arcsine
  sinInvHandler = () => {
    const { input } = this.state;
    const randValue = 180 / PI;
    if ((input === '')) {
      return;
    }

    if (input >= sinNegativeRange && input <= sinPositiveRange) {
      const newValue = parseFloat(input);
      const newValueInv = Math.asin(newValue);
      // const newValueInv = Math.acos(newValue)
      const newValueInRad = (newValueInv * randValue).toFixed(14);;
      this.setState({
        input: newValueInRad
      });
    } else {
      this.setState({
        input: 'ERROR'
      });
    }


  }
  //arccosine
  cosInvHandler = () => {
    const { input } = this.state;
    const randValue = 180 / PI;
    if (input === '') {
      return;
    }
    if (input >= sinNegativeRange && input <= sinPositiveRange) {
      const newValue = parseFloat(input);
      const newValueInv = Math.acos(newValue);
      const newValueInRad = (newValueInv * randValue).toFixed(14);;
      this.setState({
        input: newValueInRad
      });
    } else {
      this.setState({
        input: 'ERROR'
      });
    }

  }

  //arctangent
  tanInvHandler = () => {
    const { input } = this.state
    const randValue = 180 / PI;

    if (input === '') {
      return;
    }
    if (input >= sinNegativeRange && input <= sinPositiveRange) {
      const newValue = parseFloat(input);
      const newValueInv = Math.atan(newValue).toFixed(14);
      const newValueInRad = (newValueInv * randValue).toFixed(14);

      this.setState({
        input: newValueInRad
      })
    } else {
      this.setState({
        input: 'ERROR'
      });
    }

  }
  //Exponetial function
  eInvHandler = () => {
    const { input } = this.state
    if (input === '') {
      return;
    }
    const newValue = parseFloat(input);
    const newValueE = Math.exp(newValue).toFixed(10);
    this.setState({
      input: newValueE
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Calc-Wrapper">
          <div className="row">
            <h2 className="Heading">ReactJs Calculator</h2>
          </div>
          <div className="row">
            <Input input={this.state.input}></Input>
          </div>

          <div className="row">
            <Button click={this.clearLastCharHandler}>C</Button>
            <Button click={this.inputPercentHandler} >%</Button>
            <Button click={this.toggleSignHandler}>±</Button>
            <Button click={this.powerHandler}>x<sub>2</sub></Button>
            <Button click={this.sqrtHandler}>√x</Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>7</Button>
            <Button click={this.acceptInputHandler}>8</Button>
            <Button click={this.acceptInputHandler}>9</Button>
            <Button click={this.acceptInputHandler}>/</Button>
            <Button click={this.sinHandler}>sin</Button>
            <Button click={this.sinInvHandler}>sin<sub>-1</sub> </Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>4</Button>
            <Button click={this.acceptInputHandler}>5</Button>
            <Button click={this.acceptInputHandler}>6</Button>
            <Button click={this.acceptInputHandler}>*</Button>
            <Button click={this.cosHandler}>cos</Button>
            <Button click={this.cosInvHandler}>cos<sub>-1</sub></Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>1</Button>
            <Button click={this.acceptInputHandler}>2</Button>
            <Button click={this.acceptInputHandler}>3</Button>
            <Button click={this.acceptInputHandler}>+</Button>
            <Button click={this.tanHandler}>tan</Button>
            <Button click={this.tanInvHandler}>tan<sub>-1</sub></Button>
          </div>

          <div className="row">
            <Button click={this.acceptInputHandler}>.</Button>
            <Button click={this.acceptInputHandler}>0</Button>
            <Button click={() => this.equalHandler()}>=</Button>
            <Button click={this.acceptInputHandler}>-</Button>
            <Button click={this.logHandler}>log</Button>
            <Button click={this.eInvHandler}>e</Button>
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
