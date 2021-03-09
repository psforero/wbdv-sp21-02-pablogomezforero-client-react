import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';
import { Link, useParams } from 'react-router-dom';
import topicService from '../../services/topic-service';

const TopicPills = (
  {
    topics = [],
    createTopic,
    deleteTopic,
    updateTopic,
    findTopicsForLesson
  }
) => {
  const { courseId, moduleId, lessonId } = useParams();
  useEffect(() => {
    findTopicsForLesson(moduleId)
  }, []);
  return (
    <div>
      <h3>Topics --> lessonId: {lessonId.slice(lessonId.length - 5)}</h3>
      <div className="nav nav-pills nav-justified">
        {
          topics.map(topic =>
            <Link className="nav-link"
                  to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}>
              <EditableItem
                item={topic}
                deleteItem={deleteTopic}
                updateItem={updateTopic}/>
            </Link>
          )
        }
        <a className="nav-link"
           href="#"
           onClick={createTopic}>
          <i className="fas fa-plus fa-lg"/>
        </a>
      </div>
    </div>
  )
}

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
    },
    findTopicsForLesson: (lessonId) => {
      topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
          type: 'FIND_TOPICS_FOR_LESSON',
          topics
        }));
    }
  }
}

export default connect(stpm, dtpm)(TopicPills);