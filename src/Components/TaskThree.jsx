// https://medium.com/@justin.sherman/react-coding-interview-challenge-3-94bc3386ba1c

import { useEffect, useState } from 'react';
import axios from 'axios';

function TaskThree() {
  return <GenerateList />;
}

const GenerateList = () => {
  //YOUR CODE HERE
  const [activityList, setActivityList] = useState([]);
  const [disable, setDisable] = useState(false);

  const generateActivity = async () => {
    setDisable(true);
    const res = await axios.get('https://www.boredapi.com/api/activity');
    if (res.status == 200) {
      setActivityList([...activityList, res?.data]);
    } else {
      window.alert('Error while fetching activity');
    }
    setDisable(false);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <button disabled={disable} onClick={() => generateActivity()}>
          Generate Activity
        </button>
      </div>
      <ul>
        {activityList.map((obj) => (
          <div key={obj.key * Math.random()}>
            <ExpandableListItem item={obj} />
          </div>
        ))}
      </ul>
    </div>
  );
};

const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <ul>
        {item.activity}
        <button
          style={{ marginLeft: 10 }}
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded ? 'Expand' : 'Collapse'}
        </button>
        <div style={{ marginLeft: 50 }}>
          {expanded &&
            Object.keys(item).map((task, i) => (
              <li key={i * Math.random()}>
                {task} : {item[task]}
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default TaskThree;
