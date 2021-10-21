/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
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
      operation: null,
    };
    this.str = '';
    this.calculateHandler = this.calculateHandler.bind(this);
  }

 calculateHandler = (e) => {
   this.setState((state) => calculate(state, e.target.innerText));
   this.str = e.target.innerText;
 }

 render() {
   return (
     <div>
       <Result result={this.state} str={this.str} />
       <Buttons calculateHandler={this.calculateHandler} />
     </div>
   );
 }
}
