import React from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';

const LessonTabs = (
  {
    lessons = [],
    createLesson,
    deleteLesson,
    updateLesson
  }
) =>
  <div>
    <h2>Lessons {lessons.length}</h2>
    <ul className="nav nav-tabs nav-justified">
      {
        lessons.map((lesson) =>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={lesson} deleteItem={deleteLesson} updateItem={updateLesson}/>
            </a>
          </li>
        )
      }
      <li className="nav-item" onClick={createLesson}>
        <a className="nav-link" href="#">
          <i className="fas fa-plus fa-lg"/>
        </a>
      </li>
    </ul>
  </div>

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
    }
  }
}

export default connect(stpm, dtpm)(LessonTabs)
