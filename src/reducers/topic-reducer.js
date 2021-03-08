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
    case 'CREATE_TOPIC':
      return {
        topics: [...state.topics, {_id: 66, title: 'New Topic'}]
      };
    case 'FIND_TOPICS_FOR_LESSON':
    case 'FIND_TOPIC':
    case 'UPDATE_TOPIC':
      return {
        topics: state.topics.map((topic) => {
          return (topic._id === action.topic._id) ? action.topic : topic
        })
      };
    case 'DELETE_TOPIC':
      return {
        topics: state.topics.filter((topic) => {
          return (topic._id !== action.topic._id);
        })
      };
    default:
      return state;
  }
}

export default topicReducer;