import React from 'react'
import { connect } from 'react-redux'
import moduleReducer from '../../reducers/module-reducer';
import EditableItem from './editable-item';

const ModuleList = (
  {
    modules = [],
    createModule,
    deleteModule
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
            />
          </li>
        )
      }
      <li className="list-group-item" onClick={createModule}>
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
    deleteModule: (item) => {
      dispatch({
        type: 'DELETE_MODULE',
        module: item
      })
    }
  }
}

export default connect(stpm, dtpm)(ModuleList);