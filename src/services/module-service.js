const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/pforero731151/courses/'

export const findModulesForCourse = (courseId) =>
  fetch(`${COURSES_URL}/${courseId}/modules`)
    .then(response => response.json());

const api = {
  findModulesForCourse
};

export default api;