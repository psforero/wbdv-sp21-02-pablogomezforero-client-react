import React, {useState} from "react";

const Navbar = ({addCourse, addAll}) => {
  const [newTitle, setNewTitle] = useState("");

  const createCourse = () => {
    const newCourse = {
      title: newTitle,
      owner: "me",
      lastModified: "1/2/27"
    };
    addCourse(newCourse);
    setNewTitle("");
  }

  return (
    <div>
      <nav className="row navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="col-1 collapse navbar-collapse">
          <i className="fas fa-lg fa-bars"></i>
        </div>

        <div className="col-2 collapse navbar-collapse">
          <a href="/" className="navbar-brand">
            Course Manager
          </a>
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
          {/*<i className="fas fa-fw fa-2x fa-ellipsis-v" onClick={() => addAll()}></i>*/}
        </div>

        {/*<div>*/}
        {/*  <input className="form-control" type="text" placeholder="New course title"/>*/}

        {/*  <button className="btn btn-success"*/}
        {/*          onClick={this.addCourse}>*/}
        {/*    Add Course*/}
        {/*  </button>*/}
        {/*</div>*/}
      </nav>

        <i className="fas fa-fw fa-3x fa-plus-circle" id="wd-float-btn" onClick={() => createCourse()}></i>
    </div>
  )
}

export default Navbar;