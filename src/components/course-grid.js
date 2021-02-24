import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, updateCourse, courses}) =>
  <div>
    <table className="table">
      <thead>
      <tr className="row">
        <th className="col">Courses</th>
        <th className="col-2">
          <div className="float-right">
            <i className="fas fa-fw fa-lg fa-folder"></i>
            <i className="fas fa-fw fa-lg fa-sort-alpha-down"></i>
            <Link to="/courses/table">
              <i className="fas fa-fw fa-lg fa-list"></i>
            </Link>
          </div>
        </th>
      </tr>
      </thead>
    </table>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {
        courses.map((course, index) =>
          <CourseCard
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
            key={index}
            course={course}
            title={course.title}
            owner={course.owner}
            lastModified={course.lastModified}
          />
        )
      }
    </div>

  </div>

export default CourseGrid;