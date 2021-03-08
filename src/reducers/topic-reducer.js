const initialState = {
  topics: [
    { _id: 11, title: 'Topic 1A' },
    { _id: 22, title: 'Topic 2A' },
    { _id: 33, title: 'Topic 3A' },
    { _id: 44, title: 'Topic 4A' },
    { _id: 55, title: 'Topic 5A' },
  ]
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    case 'CREATE_TOPIC':
    case 'FIND_TOPICS_FOR_LESSON':
    case 'FIND_TOPIC':
    case 'UPDATE_TOPIC':
    case 'DELETE_TOPIC':
      return state;
  }
}

export default topicReducer;