import React from 'react'
import { connect } from 'react-redux'

const TopicPills = ({ topics = [] }) =>
  <div>
    <h3>Topics</h3>
    <ul className="nav nav-pills">
      {
        topics.map(topic =>
          <li className="nav-item">
            <a href="" className="nav-link">{topic.title}</a>
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