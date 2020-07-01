import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearBtn from './components/ClearButton/ClearBotton';

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
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>

          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>x</Button>
          </div>

          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>

          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>

          <div className="row">
            <ClearBtn clearHandler={() => this.clearInputHandler}>Clear</ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
