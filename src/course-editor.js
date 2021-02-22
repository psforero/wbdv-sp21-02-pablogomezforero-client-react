import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <div>
    <Link>
      <i className="fas fa-fw fa-2x fa-arrow-left float-left" onClick={() => history.goBack()}></i>
    </Link>
    <h2>
      Course Editor
    </h2>

    <div className="container main-container">
      <div className="row">
        <div className="col-4">
          <ul className="list-group">
            <li className="list-group-item">
              Module 1 - JQuery
              <a href="#">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item active">
              Module 2 - React
              <a href="">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item">
              Module 3 - Redux
              <a href="">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item">
              Module 4 - Native
              <a href="#">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item">
              Module 5 - Angular
              <a href="#">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item">
              Module 6 - Node
              <a href="#">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
            <li className="list-group-item">
              Module 7 - Mongo
              <a href="#">
                <i className="far fa-trash-alt float-end"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="" className="nav-link">Topic 1</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Topic 2</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Topic 3</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Topic 4</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">+</a>
            </li>
          </ul>
          <div className="row">
            <div className="d-grid gap-2 d-sm-flex justify-content-md-end align-items-center">
              <button type="button"
                      className="btn btn-success">
                Save
              </button>
              <div className="form-check form-switch">
                <label className="form-check-label"
                       htmlFor="previewSwitch">
                  Preview
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="previewSwitch"/>
              </div>
            </div>


          </div>
          <div className="row class-content">
            <h1>Content</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus dicta eaque eligendi error ipsam labore laboriosam non odio officiis possimus, quae quibusdam quidem quod, ratione veritatis voluptas voluptatem? Labore!</span><span>Ad debitis illo ipsa maxime porro tempore temporibus? Accusantium aliquam eius maiores numquam optio quaerat quod, veniam. Architecto corporis, ea in nam nisi nulla placeat praesentium quis ratione vel voluptas.</span><span>Alias aperiam blanditiis cumque doloremque eaque, ex expedita facere illum in ipsa iusto magnam nemo obcaecati quam quibusdam quod rerum sequi veniam vitae voluptate! Aperiam facere inventore iure nobis veritatis!</span>
          </div>
        </div>
      </div>
    </div>
  </div>

export default CourseEditor