import React from 'react';
import { NumberContext } from '../App';

function DisplayWithConsumer() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value} (Consumer).</div>}
    </NumberContext.Consumer>
  );
}

export default DisplayWithConsumer;
