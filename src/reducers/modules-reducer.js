const initialState = {
  modules: [
    { _id: 123, title: 'Module A' },
    { _id: 234, title: 'Module B' },
    { _id: 345, title: 'Module C' },
    { _id: 456, title: 'Module D' },
  ]
}

const modulerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MODULE':
    case 'DELETE_MODULE':
    case 'UPDATE_MODULE':
    default:
      return state;
  }
}

export default modulerReducer;