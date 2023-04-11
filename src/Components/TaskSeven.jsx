//https://medium.com/@justin.sherman/react-coding-interview-challenge-7-a773daf12955

import React, { useEffect, useState, useRef } from 'react';

function TaskSeven() {
  // YOUR CODE HERE

  const [inputList, setInputList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const modalRef = useRef();

  const addUserInput = () => {
    setInputList([...inputList, userInput]);
    setUserInput('');
  };

  const openModal = (str) => {
    setModalOpen(true);
    setModalText(str);
  };

  useEffect(() => {
    const clickOutside = (e) => {
      if (modalOpen && !modalRef?.current.contains(e.target))
        setModalOpen(false);
    };
    window.addEventListener('mousedown', clickOutside);

    return () => {
      window.removeEventListener('mousedown', clickOutside);
    };
  }, [modalOpen]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div>
          <input
            value={userInput}
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div style={{ marginTop: 10 }}>
            <button disabled={!userInput} onClick={addUserInput}>
              Add names
            </button>
          </div>
        </div>
        <div>
          {inputList &&
            inputList.map((str, i) => (
              <p key={i} onClick={() => openModal(str)}>
                {String(str).length > 5
                  ? `${String(str).substring(0, 5)}...`
                  : str}
              </p>
            ))}
        </div>
        <div>
          {modalOpen && (
            <div
              ref={modalRef}
              style={{
                position: 'absolute',
                inset: 0,
                margin: 'auto',
                height: 700,
                width: 500,
                background: 'black',
              }}
            >
              <p> Full text : {modalText}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskSeven;
