import React, { useState, useEffect } from 'react'
import MultipleChoiceQuestion from './multiple-choice-question';
import TrueFalseQuestion from './true-false-question';

import './questions.css';

const Question = ({ question, index, graded }) => {
  const [selected, setSelected] = useState('');
  const [questionIsCorrect, setQuestionIsCorrect] = useState(false);

  useEffect( () => {
    if (!graded) {
      question['answer'] = selected;
      setQuestionIsCorrect(question['answer'] === questionIsCorrect);
    }
  }, [question, selected, graded, questionIsCorrect])

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
    </>
  );
};

export default Question;