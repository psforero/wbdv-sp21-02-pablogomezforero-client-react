import React from 'react'
import {Route} from 'react-router-dom'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "../course-editor";

export default class CourseManager extends React.Component {
  state = {
    courses: [
      {title: "CS1234", owner: "Alice", lastModified: "1/2/21"},
      {title: "CS2345", owner: "Bob", lastModified: "2/2/22"},
      {title: "CS3456", owner: "Carlos", lastModified: "1/2/23"},
      {title: "CS4567", owner: "Dan", lastModified: "1/2/24"},
      {title: "CS5678", owner: "Ellie", lastModified: "1/2/25"},
      {title: "CS6789", owner: "Frankie", lastModified: "1/2/26"},
    ]
  };

  addCourse = () => {

    const newCourse = {
      title: "CS7890",
      owner: "Gregor",
      lastModified: "1/2/27"
    }
    this.state.courses.push(newCourse);
    this.setState(this.state);
  };

  deleteCourse = (courseToDelete) => {
    const newCourses = this.state.courses
      .filter(course => course !== courseToDelete);

    this.setState({
      courses: newCourses
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Course Manager</h1>
        <button className="btn btn-success"
                onClick={this.addCourse}>
          Add Course
        </button>
        <Route path="/courses/table">
          <CourseTable
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}/>
        </Route>
        <Route path="/courses/editor">
          <CourseEditor/>
        </Route>
      </div>
    );
  }
}