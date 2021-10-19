import * as React from 'react';
import './Calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div>
        <Result />
        <Buttons />
      </div>
    );
  }
}

const Result = () => <p className="result">0</p>;

const Buttons = () => (
  <div className="calculator-btns">
    <button type="button" className="btn">AC</button>
    <button type="button" className="btn">+/-</button>
    <button type="button" className="btn">%</button>
    <button type="button" className="btn btn-orange">&#xF7;</button>
    <button type="button" className="btn">7</button>
    <button type="button" className="btn">8</button>
    <button type="button" className="btn">9</button>
    <button type="button" className="btn btn-orange">x</button>
    <button type="button" className="btn">4</button>
    <button type="button" className="btn">5</button>
    <button type="button" className="btn">6</button>
    <button type="button" className="btn btn-orange">-</button>
    <button type="button" className="btn">1</button>
    <button type="button" className="btn">2</button>
    <button type="button" className="btn">3</button>
    <button type="button" className="btn btn-orange">+</button>
    <button type="button" className="btn zero">0</button>
    <button type="button" className="btn">.</button>
    <button type="button" className="btn btn-orange">=</button>
  </div>
);
