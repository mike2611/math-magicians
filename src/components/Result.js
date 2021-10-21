/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Result extends PureComponent {
  render() {
    const { str, state } = this.props;
    const { total, next } = state;
    return (<div className="result"><p>{str === '=' ? total : next}</p></div>);
  }
}

Result.propTypes = {
  str: PropTypes.string.isRequired,
};
