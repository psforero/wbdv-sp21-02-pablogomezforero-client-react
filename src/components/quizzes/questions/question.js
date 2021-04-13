import React, { useState } from 'react'
import MultipleChoiceQuestion from './multiple-choice-question';
import TrueFalseQuestion from './true-false-question';

import './questions.css';

const Question = ({ question, index }) => {
  const [selected, setSelected] = useState('');
  const [graded, setGraded] = useState(false);
  const [questionIsCorrect, setQuestionIsCorrect] = useState(false);

  const handleGrade = () => {
    if (selected === '') {
      alert('Can\'t leave questions blank. Please select an option');
    } else {
      setQuestionIsCorrect(question.correct === selected);
      setGraded(true);
    }
  }

  return (
    <>
      <h5>
        Q{index + 1}) {question.question}
        {
          graded && questionIsCorrect &&
          <i className="fas fa-lg fa-check"/>
        }
        {
          graded && !questionIsCorrect &&
          <i className="fas fa-lg fa-times"/>
        }
      </h5>
      {
        question.type === 'TRUE_FALSE' &&
        <TrueFalseQuestion question={question}
                           graded={graded}
                           questionIsCorrect={questionIsCorrect}
                           setSelected={setSelected}
                           selected={selected}/>
      }
      {
        question.type === 'MULTIPLE_CHOICE' &&
        <MultipleChoiceQuestion question={question}
                                graded={graded}
                                questionIsCorrect={questionIsCorrect}
                                setSelected={setSelected}
                                selected={selected}/>
      }
      <br/>
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success" onClick={() => handleGrade()} disabled={graded}>
            Grade
          </button>
          <button className="btn btn-light" onClick={() => {
            setGraded(false);
            setSelected('');
          }} disabled={!graded}>
            Reset
          </button>
        </div>
        <div className="col-4">
          <p>Your answer: {selected}</p>
        </div>
        <div className="col-4">
          {
            graded &&
            <p>Correct: {question.correct}</p>
          }
        </div>
      </div>

      <hr/>
      <hr/>
    </>
  );
};

export default Question;