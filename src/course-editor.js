import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <div>
    <Link>
      <i className="fas fa-2x fa-arrow-left float-right" onClick={() => history.goBack()}></i>
    </Link>
    <h2>
      Course Editor
    </h2>
    <p>This is where the course editor will go.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis ea eaque earum eius eligendi eos facilis
      fuga illo laudantium maxime molestiae nisi officiis quasi recusandae, rem tempora veritatis vero.</p>

    <button className="btn btn-success">Do this</button>
    <button className="btn btn-warning">Do that</button>
    <button className="btn btn-danger">Don't do this</button>
    <button className="btn btn-primary">Maybe do that</button>
  </div>

export default CourseEditor