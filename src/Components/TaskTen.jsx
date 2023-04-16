// https://medium.com/@justin.sherman/react-coding-interview-challenge-10-7d92416a8c7a

import React, { Children } from 'react';
function TaskTen() {
  const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];
  return <DivideBeforeConquer array={ARRAY} />;
}

const DivideBeforeConquer = ({ array }) => {
  // YOUR CODE HERE
  const mid = Math.floor(array.length / 2);

  return (
    <>
      <div
        style={{ justifyContent: 'center', display: 'flex' }}
      >{`[${array}]`}</div>
      {array.length !== 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              flexDirection: 'column',
              display: 'flex',
              padding: 20,
              alignItems: 'center',
            }}
          >
            <DivideBeforeConquer array={array.slice(0, mid)} />
          </div>
          <div
            style={{
              flexDirection: 'column',
              display: 'flex',
              padding: 20,
              alignItems: 'center',
            }}
          >
            <DivideBeforeConquer array={array.slice(mid)} />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskTen;
