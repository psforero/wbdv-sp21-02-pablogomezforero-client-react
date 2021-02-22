import React from "react";

const CourseCard = ({title, owner, lastModified}) =>
  <div className="col-3">
    <div className="card" style={{width: "18rem"}}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
        className="card-img-top"
        alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Owner: {owner}</p>
        <p className="card-text">Last modified: {lastModified}</p>
        <i className="fas fa-check"></i>
        <i className="fas fa-trash"></i>
        <i className="fas fa-edit"></i>
      </div>
    </div>
  </div>
export default CourseCard;