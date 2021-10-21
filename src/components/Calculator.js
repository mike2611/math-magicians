import * as React from 'react';
import Buttons from './Buttons';
import Result from './Result';
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
