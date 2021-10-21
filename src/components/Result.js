import React,{ PureComponent } from 'react';

export default class Result extends PureComponent {
  render() {
  return (<div className="result"><p>{this.props.str === '=' ? this.props.result.total : this.props.result.next}</p></div>);
  }
}
