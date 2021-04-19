const QUIZZES_URL = 'http://localhost:4000/api/quizzes'

export const findAllQuizzes = () =>
  fetch(QUIZZES_URL)
    .then(response => response.json())

export const findQuizById = (quizId) =>
  fetch(`${QUIZZES_URL}/${quizId}`)
    .then(response => response.json())

export const getAttemptsForQuiz = (quizId) =>
  fetch(`${QUIZZES_URL}/${quizId}/attempts`)
    .then(response => response.json())

export const submitQuiz = (quizId, questions) => {
  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(result =>console.log(result));
}

const api = {
  findAllQuizzes,
  findQuizById,
  getAttemptsForQuiz,
  submitQuiz
};

export default api;