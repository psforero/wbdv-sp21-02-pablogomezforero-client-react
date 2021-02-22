import React from "react";
import CourseCard from "./course-card";

const CourseGrid = ({courses}) =>
  <div>
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