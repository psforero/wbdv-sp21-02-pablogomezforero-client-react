import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";


export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table">
          <thead>
          <tr className="row">
            <th className="col-4">Class title</th>
            <th className="col-3">Owned by</th>
            <th className="col-3">Last modified</th>
            <th className="col-2">
              <div className="float-right">
                <i className="fas fa-fw fa-lg fa-folder"></i>
                <i className="fas fa-fw fa-lg fa-sort-alpha-down"></i>
                <Link to="/courses/grid">
                  <i className="fas fa-fw fa-lg fa-th"></i>
                </Link>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.courses.map((course, index) =>
              <CourseRow
                deleteCourse={this.props.deleteCourse}
                updateCourse={this.props.updateCourse}
                key={index}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}/>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}