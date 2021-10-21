/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { str, result } = props;
  const { total, next } = result;
  return (<div className="result"><p>{str === '=' ? total : next}</p></div>);
}

Result.propTypes = {
  str: PropTypes.string.isRequired,
};

export default memo(Result);
