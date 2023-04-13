//https://medium.com/@justin.sherman/react-coding-interview-challenge-9-dc20873e0ce5

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function TaskNine() {
  // YOUR CODE HERE

  const API = 'https://randomuser.me/api?results=25';

  const inputRef = useRef();
  const [userNames, setUserNames] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  const fetchUsers = async () => {
    let res = await axios.get(API);
    if (res.status != 200) {
      window.alert('Error in fetching data.\nPlease reload the page');
    }
    res = res?.data?.results;
    setUserNames([...res]);
  };

  const getUserName = (user) =>
    `${user['title']} ${user['first']} ${user['last']}`;

  useEffect(() => {
    fetchUsers();
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', margin: 30 }}>
        <input
          ref={inputRef}
          style={{ marginBottom: 20 }}
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Enter the name"
        />
        {userNames.map(
          (user, i) =>
            getUserName(user['name'])
              .toLowerCase()
              .includes(searchFilter.toLowerCase()) && (
              <div key={i}>{getUserName(user['name'])}</div>
            )
        )}
      </div>
    </>
  );
}

export default TaskNine;
