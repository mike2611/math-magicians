import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Buttons({ calculateHandler }) {
  return (
    <div className="calculator-btns">
      <button type="button" className="btn" onClick={calculateHandler}>AC</button>
      <button type="button" className="btn" onClick={calculateHandler}>+/-</button>
      <button type="button" className="btn" onClick={calculateHandler}>%</button>
      <button type="button" className="btn btn-orange" onClick={calculateHandler}>÷</button>
      <button type="button" className="btn" onClick={calculateHandler}>7</button>
      <button type="button" className="btn" onClick={calculateHandler}>8</button>
      <button type="button" className="btn" onClick={calculateHandler}>9</button>
      <button type="button" className="btn btn-orange" onClick={calculateHandler}>x</button>
      <button type="button" className="btn" onClick={calculateHandler}>4</button>
      <button type="button" className="btn" onClick={calculateHandler}>5</button>
      <button type="button" className="btn" onClick={calculateHandler}>6</button>
      <button type="button" className="btn btn-orange" onClick={calculateHandler}>-</button>
      <button type="button" className="btn" onClick={calculateHandler}>1</button>
      <button type="button" className="btn" onClick={calculateHandler}>2</button>
      <button type="button" className="btn" onClick={calculateHandler}>3</button>
      <button type="button" className="btn btn-orange" onClick={calculateHandler}>+</button>
      <button type="button" className="btn zero" onClick={calculateHandler}>0</button>
      <button type="button" className="btn" onClick={calculateHandler}>.</button>
      <button type="button" className="btn btn-orange" onClick={calculateHandler}>=</button>
    </div>
  );
}

Buttons.propTypes = {
  calculateHandler: PropTypes.string.isRequired,
};

export default memo(Buttons);
