const initialState = {
  lessons: [
    { _id: 10, title: 'Lesson 100' },
    { _id: 20, title: 'Lesson 200' },
    { _id: 30, title: 'Lesson 300' },
    { _id: 40, title: 'Lesson 400' },
  ]
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LESSON':
    case 'FIND_LESSONS_FOR_MODULE':
    case 'FIND_LESSON':
    case 'UPDATE_LESSON':
    case 'DELETE_LESSON':
    default:
      return state;
  }
};

export default lessonReducer;