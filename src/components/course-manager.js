import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './course-navbar/course-navbar';
import CourseTable from './course-table/course-table';
import CourseGrid from './course-grid/course-grid';
import CourseEditor from './course-editor/course-editor';
import courseService from '../services/course-service';
import { act } from '@testing-library/react';

export default class CourseManager extends React.Component {
  state = {
    courses: []
  };

  addAll = () => {
    const initialCourses = [
      { title: 'CS1234', owner: 'Alice', lastModified: '1/2/21' },
      { title: 'CS2345', owner: 'Bob', lastModified: '2/2/22' },
      { title: 'CS3456', owner: 'Carlos', lastModified: '1/2/23' },
      { title: 'CS4567', owner: 'Dan', lastModified: '1/2/24' },
      { title: 'CS5678', owner: 'Ellie', lastModified: '1/2/25' },
      { title: 'CS6789', owner: 'Frankie', lastModified: '1/2/26' },
    ];

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

  deleteAll = () => {
    this.state.courses.forEach(course => {
      console.log(course);
      this.deleteCourse(course);
    });
  }

  componentDidMount = () => {
    courseService.findAllCourses()
      .then(actualCourses => this.setState(
        {
          courses: actualCourses
        }
      ))
  };

  addCourse = (newCourse) => {
    courseService.createCourse(newCourse)
      .then(course => this.setState(
        (prevState) => (
          {
            ...prevState,
            courses: [
              ...prevState.courses,
              course
            ],
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
          }
        ))
      })
  }

  updateCourse = (courseToUpdate) => {
    courseService.updateCourse(courseToUpdate._id, courseToUpdate)
      .then(status =>
        this.setState((prevState) => (
          {
            ...prevState,
            courses: prevState.courses.map(
              course => course._id === courseToUpdate._id ? courseToUpdate : course)
          }
        )))
  }

  render() {
    return (
      <div>
        <Route path="/courses/table"
               exact={true}>
          <Navbar
            addCourse={this.addCourse}
            addAll={this.addAll}/>
          <CourseTable
            deleteCourse={this.deleteCourse}
            updateCourse={this.updateCourse}
            courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid"
               exact={true}>
          <Navbar
            addCourse={this.addCourse}
            addAll={this.addAll}/>
          <CourseGrid
            deleteCourse={this.deleteCourse}
            updateCourse={this.updateCourse}
            courses={this.state.courses}/>
        </Route>
        <Route
          path={[
            '/courses/:layout/edit/:courseId/',
            '/courses/:layout/edit/:courseId/modules/:moduleId/',
            '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId',
            '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId',
            '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widget/:widgetId',
          ]}
          exact={true}
          render={() =>
            <CourseEditor/>}>
        </Route>
      </div>
    );
  }
}