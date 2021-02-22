import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
  <div>
    <Link to="/courses/table">
      <i className="fas fa-2x fa-list float-right"></i>
    </Link>
    <h2>Course grid</h2>

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