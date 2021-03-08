import React from 'react';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import modulerReducer from '../reducers/modules-reducer';
import { Provider } from 'react-redux';
import ModuleList from './module-list';

const store = createStore(modulerReducer);

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

    <ModuleList/>
  </Provider>

export default CourseEditor