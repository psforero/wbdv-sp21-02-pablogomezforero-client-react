import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './questions/question';
import questionService from '../../services/question-service'
import quizService from '../../services/quiz-service'

const Quiz = () => {
    const { quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [graded, setGraded] = useState(false);
    const [showAttempts, setShowAttempts] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
      questionService.findQuestionsForQuiz(quizId)
        .then((questions) => {
          setQuestions(questions);
        })
      quizService.getAttemptsForQuiz(quizId)
        .then((atmps) => {
          setAttempts(atmps);
        })
    }, [quizId, attempts]);

    const handleSubmit = async () => {
      let empty = false;
      let questionNumber = null;
      questions.forEach((question, index) => {
        if (question.answer === '') {
          empty = true;
          questionNumber = index + 1;
        }
      })
      if (!empty) {
        setGraded(true);
        const resultResponse = await quizService.submitQuiz(quizId, questions);
        setResult(resultResponse);
      } else {
        alert(`Question ${questionNumber} is empty`);
      }
    }

    return (
      <div className="container">
        <h2>Quiz ({quizId})</h2>
        {
          !showAttempts &&
          <button className='btn btn-info' onClick={() => {
            setShowAttempts(true)
          }}>Show Attempts</button>
        }
        {
          showAttempts &&
          <>
            <button className='btn btn-light' onClick={() => {
              setShowAttempts(false)
            }}>Hide Attempts
            </button>
            <h3>Attempts</h3>
            <ul>
              {
                attempts.map((attempt) => {
                  return (
                    <li>attempt.toString();</li>
                  )
                })
              }
            </ul>
          </>
        }

        <hr/>
        {
          questions.map((question, index) => {
            return (
              <>
                <div className="row">
                  <div className="col-2"/>
                  <div className="col-8">
                    <Question question={question} index={index} graded={graded}/>
                    <p>{question.answer}</p>
                  </div>
                  <div className="col-2"/>
                </div>
              </>
            );
          })
        }
        <div className='row'>
          <div className='col-2'/>
          <button className="btn btn-info" onClick={() => handleSubmit()}>Submit Quiz</button>
        </div>
      </div>
    )
  }
;

export default Quiz;