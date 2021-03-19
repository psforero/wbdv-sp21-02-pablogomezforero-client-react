import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import moduleReducer from '../../reducers/module-reducer';
import lessonReducer from '../../reducers/lesson-reducer';
import topicReducer from '../../reducers/topic-reducer';
import ModuleList from './module-list';
import LessonTabs from './lesson-tabs';
import TopicPills from './topic-pills';
import WidgetList from './widgets/widget-list'

const reducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer
})

const store = createStore(reducer);

const CourseEditor = () => {
  const { layout } = useParams();
  return (
    <Provider store={store}>
      <div className="row">
        <Link className="col-1" to={`/courses/${layout}`}>
          <i className="fas fa-fw fa-2x fa-times float-left"/>
        </Link>
        <h2 className="col">
          Course Editor
        </h2>
      </div>

      <div className="row">
        <div className="col-3">
          <ModuleList/>
        </div>
        <div className="col-9">
          <LessonTabs/>
          <div>
            <TopicPills/>
            <WidgetList/>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default CourseEditor