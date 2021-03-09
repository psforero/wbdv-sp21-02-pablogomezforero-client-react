import React, { useEffect } from 'react'
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
  const { courseId, moduleId } = useParams();
  useEffect(() => {
    findLessonsForModule(moduleId)
  }, []);
  return (
    <div>
      <h2>Lessons --> moduleId: {moduleId.slice(moduleId.length - 4)}</h2>
      <div className="nav nav-tabs nav-justified">
        {
          lessons.map((lesson) =>
            <Link className="nav-link"
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
           onClick={createLesson}>
          <i className="fas fa-plus fa-lg"/>
        </a>
      </div>
    </div>
  )
}

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {
    createLesson: () => {
      dispatch({ type: 'CREATE_LESSON' });
    },
    deleteLesson: (lesson) => {
      dispatch({
        type: 'DELETE_LESSON',
        lesson
      })
    },
    updateLesson: (lesson) => {
      dispatch({
        type: 'UPDATE_LESSON',
        lesson
      })
    },
    findLessonsForModule: (moduleId => {
      lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: 'FIND_LESSONS_FOR_MODULE',
            lessons
          })
        )
    })
  }
}

export default connect(stpm, dtpm)(LessonTabs)
