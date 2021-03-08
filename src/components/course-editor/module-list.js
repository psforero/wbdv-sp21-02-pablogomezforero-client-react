import React from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';

const ModuleList = (
  {
    modules = [],
    createModule,
    deleteModule,
    updateModule
  }
) =>
  <div>
    <h2>Modules</h2>
    <ul className="list-group">
      {
        modules.map((module) =>
          <li className="list-group-item">
            <EditableItem
              item={module}
              deleteItem={deleteModule}
              updateItem={updateModule}
            />
          </li>
        )
      }
      <li className="list-group-item text-center" onClick={createModule}>
        <i className="fas fa-plus fa-2x"/>
      </li>
    </ul>
  </div>

const stpm = (state) => {
  return {
    modules: state.moduleReducer.modules
  }
}
const dtpm = (dispatch) => {
  return {
    createModule: () => {
      dispatch({ type: 'CREATE_MODULE' })
    },
    deleteModule: (module) => {
      dispatch({
        type: 'DELETE_MODULE',
        module
      })
    },
    updateModule: (module) => {
      dispatch({
        type: 'UPDATE_MODULE',
        module
      });
    },
  }
}

export default connect(stpm, dtpm)(ModuleList);