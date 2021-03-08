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
      return {
        lessons: [...state.lessons, { _id: 50, title: 'New Lesson' }]
      }
    case 'FIND_LESSONS_FOR_MODULE':
    case 'FIND_LESSON':
    case 'UPDATE_LESSON':
      return {
        lessons: state.lessons.map((lesson) => {
          return (action.lesson._id === lesson._id) ? action.lesson : lesson;
        })
      }
    case 'DELETE_LESSON':
      return {
        lessons: state.lessons.filter((lesson) => {
          return action.lesson._id !== lesson._id;
        })
      }
    default:
      return state;
  }
};

export default lessonReducer;