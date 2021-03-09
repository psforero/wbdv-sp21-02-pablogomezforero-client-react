const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/pforero731151/lessons'
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/pforero731151/topics'

export const findTopicsForLesson = (lessonId) =>
  fetch(`${LESSONS_URL}/${lessonId}/topics`)
    .then(response => response.json());

export const createTopic = (lessonId, topic) =>
  fetch(`${LESSONS_URL}/${lessonId}/topics`, {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json());

const api = {
  findTopicsForLesson,
  createTopic
};

export default api;