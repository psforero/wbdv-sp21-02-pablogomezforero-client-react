import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import moduleReducer from '../../reducers/module-reducer';
import lessonReducer from '../../reducers/lesson-reducer';
import topicReducer from '../../reducers/topic-reducer';
import ModuleList from './module-list';
import LessonTabs from './lesson-tabs';
import TopicPills from './topic-pills';

const reducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer
})

const store = createStore(reducer);

const CourseEditor = ({ history }) =>
  <Provider store={store}>

    <div className="row">
      <Link className="col-1">
        <i className="fas fa-fw fa-2x fa-arrow-left float-left" onClick={() => history.goBack()}/>
      </Link>
      <h2 className="col">
        Course Editor
      </h2>
    </div>

    <div className="row">
      <div className="col-4">
        <ModuleList/>
      </div>
      <div className="col-8">
        <LessonTabs/>
        <div>
          <TopicPills/>
        </div>
      </div>
    </div>

  </Provider>

export default CourseEditor