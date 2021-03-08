import React from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';

const TopicPills = (
  {
    topics = [],
    createTopic,
    deleteTopic,
    updateTopic
  }
) =>
  <div>
    <h3>Topics {topics.length}</h3>
    <ul className="nav nav-pills nav-justified">
      {
        topics.map(topic =>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={topic} deleteItem={deleteTopic} updateItem={updateTopic}/>
            </a>
          </li>
        )
      }
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-plus fa-lg" onClick={createTopic}/>
        </a>
      </li>
    </ul>
  </div>

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  };
}

const dtpm = (dispatch) => {
  return {
    createTopic: () => {
      dispatch({ type: 'CREATE_TOPIC' })
    },
    deleteTopic: (topic) => {
      dispatch({
        type: 'DELETE_TOPIC',
        topic
      })
    },
    updateTopic: (topic) => {
      dispatch({
        type: 'UPDATE_TOPIC',
        topic
      })
    }
  }
}

export default connect(stpm, dtpm)(TopicPills);