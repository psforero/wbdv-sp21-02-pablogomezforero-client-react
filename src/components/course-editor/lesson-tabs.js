import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';
import { Link, useParams } from 'react-router-dom';
import lessonService from '../../services/lesson-service';

const LessonTabs = (
  {
    lessons = [],
    createLesson,
    deleteLesson,
    updateLesson,
    findLessonsForModule
  }
) => {
  const { courseId, moduleId , lessonId} = useParams();
  const [moduleSelected, setModuleSelected] = useState(moduleId !== 'undefined' && typeof moduleId !== 'undefined');
  useEffect(() => {
    setModuleSelected(moduleId !== 'undefined' && typeof moduleId !== 'undefined');
    findLessonsForModule(moduleId);
  }, [moduleId, lessonId]);

  return (
    <>
      <h2>Lessons</h2>
      {
        moduleSelected &&
        <div className="nav nav-tabs nav-justified">
          {
            lessons.map((lesson) =>
              <Link
                className={`nav-link ${lesson._id === lessonId ? 'active' : ''}`}
                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}>
                <EditableItem
                  item={lesson}
                  deleteItem={deleteLesson}
                  updateItem={updateLesson}/>
              </Link>
            )
          }
          <a className="nav-link"
             href="#"
             onClick={() => createLesson(moduleId)}>
            {
              lessons.length <= 0 &&
              <p>No lessons available. Click here to create a new lesson</p>
            }
            <i className="fas fa-plus fa-lg"/>
          </a>
        </div>
      }
      {
        !moduleSelected &&
        <p>Please, select a module</p>
      }
    </>
  )
}

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {
    createLesson: (moduleId) => {
      lessonService.createLesson(moduleId, { title: 'New Lesson' })
        .then(savedLesson => dispatch({
          type: 'CREATE_LESSON',
          lesson: savedLesson
        }));
    },
    deleteLesson: (lesson) => {
      lessonService.deleteLesson(lesson._id)
        .then(status => dispatch({
          type: 'DELETE_LESSON',
          lesson
        }));
    },
    updateLesson: (lesson) => {
      lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
          type: 'UPDATE_LESSON',
          lesson
        }));
    },
    findLessonsForModule: (moduleId) => {
      lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
          type: 'FIND_LESSONS_FOR_MODULE',
          lessons
        }));
    }
  }
}

export default connect(stpm, dtpm)(LessonTabs)
