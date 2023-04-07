// https://medium.com/@justin.sherman/react-coding-interview-challenge-2-bb8909e2b4a0

import React, { useState } from 'react';

function TaskTwo() {
  return <RobotList />;
}

const RobotList = () => {
  const [roboList, setRoboList] = useState([]);
  const [userInp, setUserInp] = useState('');

  const getRobo = () => {
    setRoboList([...roboList, userInp]);
    setUserInp('');
  };

  return (
    <div style={{ paddingTop: 40 }}>
      <div>
        <div style={{ textAlign: 'center' }}>
          <input
            value={userInp}
            onChange={(e) => setUserInp(e.target.value)}
            placeholder="Enter the robo"
          />
          <button
            disabled={!userInp}
            style={{ marginLeft: 5 }}
            onClick={() => getRobo()}
          >
            Get Robo
          </button>
        </div>
        <div>
          {roboList &&
            roboList.map((img, i) => (
              <img
                key={i}
                onClick={() =>
                  setRoboList(roboList.filter((ele) => ele != img))
                }
                src={`https://robohash.org/${img}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTwo;
