import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentsComponent extends Component {
  render() {
    return (
        <div className="container">
            <p>ParentsComponent</p>
          <div className="row">
              {/* -props có thể hiểu là những thuộc tính của element{component}
                    - props được truyển từ component cha {Parent Component} sang component con {Child Component} 
                    - props có dạng key=value*/}
            <ChildComponent name="Quy" course="BC12"/>
            <ChildComponent name="Hoang" course="BC13"/>
            <ChildComponent name="Hoang" course="BC13"/>
            <ChildComponent name="Hoang" course="BC13"/>
            <ChildComponent name="Hoang" course="BC13"/>
            <ChildComponent name="Hoang" course="BC13"/>
          </div>
        </div>

    );
  }
}
