import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CourseRow = (
  {
    deleteCourse,
    updateCourse,
    course,
    title,
    owner,
    lastModified
  }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const saveTitle = () => {
    setEditing(false);
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse);
  }

  return (
    <tr className="row">
      <td className="col-4">
        {
          // !editing && <Link to={`/courses/editor/${course._id}`}>
          !editing && <Link to={`/courses/table/edit/${course._id}`}>
            {title}
          </Link>
        }
        {
          editing && <input className="form-control"
                            type="text"
                            value={newTitle}
                            onChange={event => setNewTitle(event.target.value)}/>
        }
      </td>
      <td className="col-3 wd-owned-by-col">{owner}</td>
      <td className="col-2 wd-last-mod-col">{lastModified}</td>
      <td>
        <Link to={`/courses/${course._id}/quizzes`}>
          Quizzes
        </Link>
      </td>
      <td className="col-2">
        <div className="float-right">
          {!editing && <i className="fas fa-fw fa-edit" onClick={() => setEditing(true)}/>}
          {editing && <i className="fas fa-fw fa-check" onClick={() => saveTitle()}/>}
          <i className="fas fa-fw fa-trash" onClick={() => deleteCourse(course)}/>
        </div>
      </td>
    </tr>)
}

export default CourseRow;