import React from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';

const TopicPills = ({ topics = [] }) =>
  <div>
    <h3>Topics</h3>
    <ul className="nav nav-pills nav-justified">
      {
        topics.map(topic =>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={topic}/>
            </a>
          </li>
        )
      }
    </ul>
  </div>

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  };
}

const dtpm = (dispatch) => {
  return 'not implemented';
}

export default connect(stpm, dtpm)(TopicPills);