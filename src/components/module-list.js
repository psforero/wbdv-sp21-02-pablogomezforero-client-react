import React from 'react'
import { connect } from 'react-redux'

const ModuleList = ({ modules=[] }) =>
  <div>
    <h2>Modules</h2>
    <ul className="list-group">
      {
        modules.map(module =>
        <li className='list-group-item'>{`${module.title} (${module._id})`}</li>
        )
      }
    </ul>
  </div>

const stpm = (state) => {
  return {
    modules: state.modules
  }
}
const dtpm = (dispatch) => {
  
}

export default connect(stpm, dtpm)(ModuleList);