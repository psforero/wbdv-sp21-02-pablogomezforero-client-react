import React from 'react'
import { connect } from 'react-redux'
import moduleReducer from '../../reducers/module-reducer';

const ModuleList = ({ modules = [], createModule }) =>
  <div>
    <h2>Modules</h2>
    <ul className="list-group">
      {
        modules.map((module) =>
          <li className="list-group-item">
            {module.title}
          </li>
        )
      }
      <li onClick={createModule} className="list-group-item">
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
    }
  }
}

export default connect(stpm, dtpm)(ModuleList);