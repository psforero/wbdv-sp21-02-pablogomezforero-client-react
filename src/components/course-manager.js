import React from 'react'
import {Route} from 'react-router-dom'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "../course-editor";
import courseService from "../services/course-service";
import {act} from "@testing-library/react";

export default class CourseManager extends React.Component {
  state = {
    courses: []
  };

  addAll = () => {
    const initialCourses = [
      {title: "CS1234", owner: "Alice", lastModified: "1/2/21"},
      {title: "CS2345", owner: "Bob", lastModified: "2/2/22"},
      {title: "CS3456", owner: "Carlos", lastModified: "1/2/23"},
      {title: "CS4567", owner: "Dan", lastModified: "1/2/24"},
      {title: "CS5678", owner: "Ellie", lastModified: "1/2/25"},
      {title: "CS6789", owner: "Frankie", lastModified: "1/2/26"},
    ]

    initialCourses.forEach(course => {
      courseService.createCourse(course)
        .then(course => this.setState(
          (prevState) => (
            {
              ...prevState,
              courses: [
                ...prevState.courses,
                course
              ]
            }
          )));

    });
  }

  componentDidMount = () => {
    courseService.findAllCourses()
      .then(actualCourses => this.setState(
        {
          courses: actualCourses
        }
      ))
  }


  addCourse = () => {

    const newCourse = {
      title: "CS7890",
      owner: "Gregor",
      lastModified: "1/2/27"
    };

    courseService.createCourse(newCourse)
      .then(course => this.setState(
        (prevState) => (
          {
            ...prevState,
            courses: [
              ...prevState.courses,
              course
            ]
          }
        )));
  };

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
      .then(status => {
        this.setState((prevState) => (
          {
            ...prevState,
            courses: prevState.courses
              .filter(course => course !== courseToDelete)
          }))
      })
  }


  render() {
    return (
      <div className="container-fluid">
        <h1>Course Manager</h1>
        <button className="btn btn-success"
                onClick={this.addCourse}>
          Add Course
        </button>
        <button className="btn btn-primary"
                onClick={this.addAll}>
          Add multiple courses
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
        <Route path="/courses/editor"
               render={(props) =>
                 <CourseEditor {...props}/>}>
        </Route>
      </div>
    );
  }
}