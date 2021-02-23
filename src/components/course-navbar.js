import React, {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = ({addCourse, addAll}) => {
  const [newTitle, setNewTitle] = useState("");

  const createCourse = () => {
    const newCourse = {
      title: newTitle,
      owner: "me",
      lastModified: "1/2/27"
    };
    addCourse(newCourse);
  }

  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container-fluid row">

        <div className="col-1">
          <i className="fas fa-lg fa-bars"></i>
        </div>

        <div className="col-2">
          <p className="navbar-brand d-none d-md-block">
            Course Manager
          </p>
        </div>

        <div className="col">
          <form className="d-flex">
            <input className="form-control"
                   type="text"
                   placeholder="New course title"
                   value={newTitle}
                   onChange={event => setNewTitle(event.target.value)}/>
          </form>
        </div>

        <div className="col-1">
          <i className="fas fa-fw fa-2x fa-plus-circle" onClick={() => createCourse()}></i>
          <i className="fas fa-fw fa-2x fa-ellipsis-v" onClick={() => addAll()}></i>
        </div>
      </div>

      {/*<div>*/}
      {/*  <input className="form-control" type="text" placeholder="New course title"/>*/}

      {/*  <button className="btn btn-success"*/}
      {/*          onClick={this.addCourse}>*/}
      {/*    Add Course*/}
      {/*  </button>*/}
      {/*</div>*/}
    </nav>
  )
}

export default Navbar;