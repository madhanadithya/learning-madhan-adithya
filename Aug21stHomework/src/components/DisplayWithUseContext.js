import React, { useContext } from 'react';
import { NumberContext } from '../App';

function DisplayWithUseContext() {
  const value = useContext(NumberContext);
  return <div>The answer is {value} (useContext).</div>;
}

export default DisplayWithUseContext;
