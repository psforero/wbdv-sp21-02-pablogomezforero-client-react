const initialState = {
  modules: []
};

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MODULE':
      return {
        modules: [...state.modules, action.module]
      };
    case 'FIND_MODULES_FOR_COURSE':
      return {
        ...state,
        modules: action.modules
      };
    case 'FIND_MODULE':
    case 'UPDATE_MODULE':
      return {
        modules: state.modules.map(module => {
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