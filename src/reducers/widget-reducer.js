const initialState = {
  widgets: []
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_WIDGETS_FOR_TOPIC':
      return {
        ...state,
        widgets: action.widgets
      };
    case 'CREATE_WIDGET':
      return {
        ...state,
        widgets: [...state.widgets, action.widget]
      };
    case 'DELETE_WIDGET':
      return {
        ...state,
        widgets: state.widgets.filter(widget => {
          return (widget.id !== action.widget.id);
        })
      };
    case 'UPDATE_WIDGET':
      return {
        widgets: state.widgets.map(widget => {
          return (widget.id === action.widget.id) ? action.widget : widget
        })
      };
    default:
      return state;
  }
}

export default widgetReducer;