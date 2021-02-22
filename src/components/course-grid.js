import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
  <div>
    <div className="float-right">
      <i className="fas fa-lg fa-folder"></i>
      <i className="fas fa-lg fa-sort-alpha-down"></i>
      <Link to="/courses/table">
        <i className="fas fa-lg fa-list"></i>
      </Link>
    </div>

    <div className="row">
      {
        courses.map((course, index) =>
          <CourseCard
            key={index}
            title={course.title}
            owner={course.owner}
            lastModified={course.lastModified}
          />
        )
      }
    </div>

  </div>

export default CourseGrid;