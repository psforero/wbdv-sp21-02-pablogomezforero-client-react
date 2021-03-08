const initialState = {
  modules: [
    { _id: 'M111', title: 'Module A' },
    { _id: 'M222', title: 'Module B' },
    { _id: 'M333', title: 'Module C' },
    { _id: 'M444', title: 'Module D' },
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MODULE':
      return {
        modules: [...state.modules, { _id: 567, title: 'New Module' }]
      };
    case 'FIND_MODULES_FOR_COURSE':
      alert("Finding Modules for Course");
      return state;
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