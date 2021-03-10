import React, { useEffect, useState } from 'react'
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
  const { courseId, moduleId, lessonId, topicId } = useParams();
  const [lessonSelected, setLessonSelected] = useState(lessonId !== 'undefined' && typeof lessonId !== 'undefined');
  useEffect(() => {
    setLessonSelected(lessonId !== 'undefined' && typeof lessonId !== 'undefined');
    findTopicsForLesson(lessonId);
  }, [lessonId, topicId]);
  return (
    <>
      {
        lessonSelected &&
        <div className="nav nav-pills nav-justified">
          {
            topics.map(topic =>
              <Link className={`nav-link ${topic._id === topicId ? 'active' : ''}`}
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
             onClick={() => createTopic(lessonId)}>
            {
              topics.length <= 0 &&
              <p>No topics available. Click here to create a new topic</p>
            }
            <i className="fas fa-plus fa-lg"/>
          </a>
        </div>
      }
      {
        !lessonSelected &&
        <p>Please, select a lesson</p>
      }
    </>
  )
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  };
}

const dtpm = (dispatch) => {
  return {
    createTopic: (lessonId) => {
      topicService.createTopic(lessonId, { title: 'New Topic' })
        .then(savedTopic => dispatch({
          type: 'CREATE_TOPIC',
          topic: savedTopic
        }));
    },
    deleteTopic: (topic) => {
      topicService.deleteTopic(topic._id)
        .then(status => dispatch({
          type: 'DELETE_TOPIC',
          topic
        }));
    },
    updateTopic: (topic) => {
      topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
          type: 'UPDATE_TOPIC',
          topic
        }));
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