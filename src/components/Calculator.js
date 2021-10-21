import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Result from './Result';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [data, setData] = useState(
    {
      total: 0,
      next: null,
      operation: null,
    },
  );
  const [str, setStr] = useState('');

  useEffect(() => {
    if (str !== '') {
      setData(calculate(data, str.target.innerText));
    }
  }, [str]);

  return (
    <div>
      <Result result={data} str={str !== '' ? str.target.innerText : str} />
      <Buttons calculateHandler={setStr} />
    </div>
  );
};

export default (Calculator);
