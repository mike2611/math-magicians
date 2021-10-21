import React,{ Component } from 'react';

export default class Buttons extends Component {
  constructor() {
    super();
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  calculateHandler = (e) => {
    this.props.calculateHandler(e.target.innerText);
  }

  render() {
    return (
      <div className="calculator-btns">
        <button type="button" className="btn" onClick={this.calculateHandler}>AC</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>+/-</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>%</button>
        <button type="button" className="btn btn-orange" onClick={this.calculateHandler}>÷</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>7</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>8</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>9</button>
        <button type="button" className="btn btn-orange" onClick={this.calculateHandler}>x</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>4</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>5</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>6</button>
        <button type="button" className="btn btn-orange" onClick={this.calculateHandler}>-</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>1</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>2</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>3</button>
        <button type="button" className="btn btn-orange" onClick={this.calculateHandler}>+</button>
        <button type="button" className="btn zero" onClick={this.calculateHandler}>0</button>
        <button type="button" className="btn" onClick={this.calculateHandler}>.</button>
        <button type="button" className="btn btn-orange" onClick={this.calculateHandler}>=</button>
      </div>
    );
  }
}
