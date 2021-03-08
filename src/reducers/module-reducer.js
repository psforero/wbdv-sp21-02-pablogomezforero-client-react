const initialState = {
  modules: [
    { _id: 123, title: 'Module A' },
    { _id: 234, title: 'Module B' },
    { _id: 345, title: 'Module C' },
    { _id: 456, title: 'Module D' },
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MODULE':
      const newState = {
        modules: [...state.modules, { _id: 567, title: 'Module E' }]
      };
      return newState;
    case 'FIND_MODULES_FOR_COURSE':
    case 'FIND_MODULE':
    case 'UPDATE_MODULE':
    case 'DELETE_MODULE':
    default:
      return state;
  }
}

export default moduleReducer;