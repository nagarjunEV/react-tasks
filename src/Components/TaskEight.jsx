//https://medium.com/@justin.sherman/react-coding-interview-challenge-8-f852c6d19385

import React, { useState, useEffect } from 'react';
import QUESTIONS from './Eight';

function TaskEight() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // YOUR CODE HERE
  const [marks, setMarks] = useState(0);
  const [idx, setIdx] = useState(0);

  //   useEffect(() => {}, [idx]);

  const checkAnswer = (selected, actual) => {
    if (selected == actual) setMarks((prevMarks) => prevMarks + 1);
    setIdx((prevIdx) => prevIdx + 1);
  };

  const QUESTION = 'question';
  const ANSWERS = 'answers';
  const CORRECT = 'correct';

  return (
    <div style={{ margin: 40 }}>
      {idx < questions.length && (
        <>
          <h3>{questions[idx][QUESTION]}</h3>
          <ul>
            {questions[idx][ANSWERS].map((op, i) => (
              <li
                key={i}
                onClick={() => checkAnswer(i, questions[idx][CORRECT])}
              >
                {op}
              </li>
            ))}
          </ul>
        </>
      )}
      {idx >= questions.length && (
        <h4>You scored {(marks / questions.length) * 100}%</h4>
      )}
    </div>
  );
};

export default TaskEight;
