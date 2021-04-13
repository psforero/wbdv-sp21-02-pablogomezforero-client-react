import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import quizService from '../../services/quiz-service'

const QuizzesList = () => {
  const {courseId} = useParams();
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
      quizService.findAllQuizzes()
      .then((quizzes) => {
        setQuizzes(quizzes);
      });
  }, []);

  return (
    <div>
      <h2>Quizzes {quizzes.length}</h2>

      <ul className="list-group">
        {
          quizzes.map((quiz) => {
            return (
              <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                <li className="list-group-item">Title: {quiz.title} ({quiz._id})</li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  );
}

export default QuizzesList;