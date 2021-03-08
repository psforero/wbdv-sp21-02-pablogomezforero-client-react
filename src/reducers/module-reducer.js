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
      return {
        modules: [...state.modules, { _id: 567, title: 'New Module' }]
      };
    case 'FIND_MODULES_FOR_COURSE':
    case 'FIND_MODULE':
    case 'UPDATE_MODULE':
      return {
        modules: state.modules.map (module => {
          return (module._id === action.module._id) ? action.module : module;
          }
        )
      }
    case 'DELETE_MODULE':
      return {
        modules: state.modules.filter(module => {
          return module._id !== action.module._id
        })
      };
    default:
      return state;
  }
}

export default moduleReducer;