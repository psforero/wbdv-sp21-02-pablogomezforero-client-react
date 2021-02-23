import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
  <div>
    <span className="float-right">
      <i className="fas fa-fw fa-lg fa-folder"></i>
      <i className="fas fa-fw fa-lg fa-sort-alpha-down"></i>
      <Link to="/courses/table">
        <i className="fas fa-fw fa-lg fa-list"></i>
      </Link>
    </span>

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