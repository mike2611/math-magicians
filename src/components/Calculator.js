import React,{ Component } from 'react';
import Buttons from './Buttons';
import Result from './Result';
import calculate from '../logic/calculate';
import './Calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null
    }
    this.str = '';
    this.calculateHandler = this.calculateHandler.bind(this);
  }

 calculateHandler = (str) => {
    this.setState(calculate(this.state, str));
    this.str = str;
  }

  render() {
    return (
      <div>
        <Result result={this.state} str={this.str}/>
        <Buttons calculateHandler={this.calculateHandler}/>
      </div>
    );
 }
}
