import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';
import { Link, useParams } from 'react-router-dom';
import moduleService from '../../services/module-service';

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
  }, []);
  return (
    <div>
      <h2>Modules --> courseId: {courseId.slice(courseId.length-4)}</h2>
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
           onClick={() => createModule(courseId)}>
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
    createModule: (courseId) => {
      moduleService.createModule(courseId, { title: 'New Module' })
        .then(savedModule => dispatch({
          type: 'CREATE_MODULE',
          module: savedModule
        }));
    },
    deleteModule: (module) => {
      moduleService.deleteModule(module._id)
        .then(status => dispatch({
          type:'DELETE_MODULE',
          module
        }));
    },
    updateModule: (module) => {
      moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: 'UPDATE_MODULE',
          module
        }));
    },
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
          type: 'FIND_MODULES_FOR_COURSE',
          modules
        }));
    }
  }
}

export default connect(stpm, dtpm)(ModuleList);