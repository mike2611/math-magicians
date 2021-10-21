/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function Result(props) {
  const { str, result } = props;
  const { total, next } = result;
  return (<div className="result"><p>{str === '=' ? total : next}</p></div>);
}

Result.propTypes = {
  str: PropTypes.string.isRequired,
};
