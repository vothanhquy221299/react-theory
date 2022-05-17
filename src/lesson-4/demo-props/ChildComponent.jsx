import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class ChildComponent extends Component {
    //validate prop
    static propTypes ={
        name: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
    };
    render() {
    // Component con nhận props thông qua obj prosp
    // Lấy ra dùng key đã truyểnn ở component cha
    const {name, course} = this.props;
    return (
      <div className="col-4" style={{ paddingBottom: "30px" }}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {name}
            </h4>
            <p className="card-text">
              {course}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
