import React, {useState} from "react";
import {Link} from "react-router-dom";


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
    <tr>
      <td>
        {
          !editing && <Link to="/courses/editor">
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
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td>
        {!editing && <i className="fas fa-fw fa-edit" onClick={() => setEditing(true)}></i>}
        {editing && <i className="fas fa-fw fa-check" onClick={() => saveTitle()}></i>}
        <i className="fas fa-fw fa-trash" onClick={() => deleteCourse(course)}></i>
      </td>
    </tr>)
}

export default CourseRow;