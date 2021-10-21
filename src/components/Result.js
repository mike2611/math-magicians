/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Result extends PureComponent {
  render() {
    const { str, result } = this.props;
    const { total, next } = result;
    return (<div className="result"><p>{str === '=' ? total : next}</p></div>);
  }
}

Result.propTypes = {
  str: PropTypes.string.isRequired,
};
