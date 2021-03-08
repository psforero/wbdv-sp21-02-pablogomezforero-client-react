import React from 'react'
import { connect } from 'react-redux'

const LessonTabs = ({ lessons = [] }) =>
  <div>
    <h2>Lessons</h2>
    <ul className="nav nav-tabs">
      {
        lessons.map((lesson) =>
          <li className="nav-item">
            <a className="nav-link" href="#">{lesson.title}</a>
          </li>
        )
      }
    </ul>
  </div>

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {

  }
}

export default connect(stpm, dtpm)(LessonTabs)
