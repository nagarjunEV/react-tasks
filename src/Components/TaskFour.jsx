// https://medium.com/@justin.sherman/react-coding-interview-challenge-4-c41e2874d8ef

import React from 'react';
import './../index.css';

import { useState } from 'react';

const COUNT = 10;
const LADDER_IMAGE =
  'https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png';

function TaskFour() {
  return <Ladder img={LADDER_IMAGE} count={{ COUNT }} />;
}

const Ladder = ({ img, count }) => {
  // YOUR CODE HERE
  count = Number(count.COUNT);

  const [currEle, setCurrEle] = useState(count + 1);
  console.log(currEle);

  const changeDimension = (i) => {
    // console.log('Change', i);
    setCurrEle(i);
  };

  const revertDimension = (i) => {
    console.log('Revert', i);
    // setCurrEle(count + 1);
  };

  return (
    <div>
      {Array.from(Array(count)).map((e, i) => (
        <div
          key={i}
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            className={i >= currEle ? 'expand' : 'revert'}
            src={img}
            onMouseOver={() => changeDimension(i)}
            onMouseLeave={() => revertDimension(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskFour;
