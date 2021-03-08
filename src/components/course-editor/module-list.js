import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';
import { Link, useParams } from 'react-router-dom';
import { findModulesForCourse } from 'src/services/module-service'

const ModuleList = (
  {
    modules = [],
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse
  }
) => {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId);
  });
  return (
    <div>
      <h2>Modules --> courseId: {courseId}</h2>
      <div className="list-group">
        {
          modules.map((module) =>
            <Link className="list-group-item list-group-item-action"
                  to={`/courses/editor/${courseId}/${module._id}`}>
              <EditableItem
                item={module}
                deleteItem={deleteModule}
                updateItem={updateModule}
              />
            </Link>
          )
        }
        <a className="list-group-item list-group-item-action text-center"
           href="#"
           onClick={createModule}>
          <i className="fas fa-plus fa-lg"/>
        </a>
      </div>
    </div>
  )
}

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
      })
    },
    findModulesForCourse: (courseId) => {
      dispatch({
        type: 'FIND_MODULES_FOR_COURSE',
        courseId
      })
    }
  }
}

export default connect(stpm, dtpm)(ModuleList);