import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './questions/question';
import questionService from '../../services/question-service'

const Quiz = () => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    questionService.findQuestionsForQuiz(quizId)
      .then((questions) => {
        setQuestions(questions);
      })
  }, [quizId]);

  return (
    <div className="container">
      <h2>Quiz ({quizId})</h2>
      <hr/>
      {
        questions.map((question, index) => {
          return (
            <>
              <div className="row">
                <div className="col-2"/>
                <div className="col-8">
                  <Question question={question} index={index}/>
                </div>
                <div className="col-2"/>
              </div>
            </>
          );
        })
      }
    </div>
  )
}

export default Quiz;