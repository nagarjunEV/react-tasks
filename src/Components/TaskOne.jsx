// https://medium.com/@justin.sherman/react-coding-interview-challenge-1-4b19bce85b0a

import React, { useState } from 'react';

function TaskOne() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'a car licensed to transport passengers in return for payment of a fare',
    food: {
      sushi:
        'a traditional Japanese dish of prepared rice accompanied by seafood and vegetables',
      apple: {
        Honeycrisp:
          'an apple cultivar developed at the MAES Horticultural Research Center',
        Fuji: 'an apple cultivar developed by growers at Tohoku Research Station',
      },
    },
  });

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObj={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObj }) => {
  return (
    <div>
      {Object.keys(nestedObj).map((obj, i) =>
        typeof nestedObj[obj] == 'string' ? (
          <div>
            {obj} : {nestedObj[obj]}
          </div>
        ) : (
          <div>
            {obj} :
            <div style={{ paddingLeft: 50 }}>
              <DisplayNested nestedObj={nestedObj[obj]} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TaskOne;
