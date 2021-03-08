import React from 'react'
import { connect } from 'react-redux'
import EditableItem from './editable-item';

const LessonTabs = (
  {
    lessons = [],
    createLesson,
    deleteLesson
  }
) =>
  <div>
    <h2>Lessons</h2>
    <ul className="nav nav-tabs nav-justified">
      {
        lessons.map((lesson) =>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <EditableItem item={lesson} deleteItem={deleteLesson}/>
            </a>
          </li>
        )
      }
      <li className="nav-item" onClick={createLesson}>
        <a className="nav-link" href="#">
          <i className="fas fa-plus fa-2x"/>
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
    createLesson: () => alert('create new lesson'),
    deleteLesson: (item) => alert(`delete lesson ${item.title}`)
  }
}

export default connect(stpm, dtpm)(LessonTabs)
