const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/pforero731151/modules' // /MODULE_ID/lessons
const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/pforero731151/lessons' // /LESSON_ID

export const findLessonsForModule = (moduleId) =>
  fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(response => response.json());

const api = {
  findLessonsForModule,
}

export default api;