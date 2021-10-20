import * as React from 'react';
import Calculator from './components/Calculator';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
