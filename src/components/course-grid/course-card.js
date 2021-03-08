import React, {useState} from "react";
import {Link} from "react-router-dom";

const CourseCard = (
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
    <div className="col">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
          className="card-img-top"
          alt="..."/>
        <div className="card-body">
          {
            !editing && <Link to="/courses/editor">
              <h5 className="card-title">{title}</h5>
            </Link>
          }
          {
            editing && <input className="form-control"
                              type="text"
                              value={newTitle}
                              onChange={event => setNewTitle(event.target.value)}/>
          }
          <p className="card-text">Owner: {owner}</p>
          <p className="card-text">Last modified: {lastModified}</p>

          <Link to="/courses/editor"
                className="btn btn-primary">
            Edit
          </Link>

          <div className="float-right">
            {!editing && <i className="fas fa-fw fa-edit" onClick={() => setEditing(true)}></i>}
            {editing && <i className="fas fa-fw fa-check" onClick={() => saveTitle()}></i>}
            <i className="fas fa-fw fa-trash" onClick={() => deleteCourse(course)}></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseCard;