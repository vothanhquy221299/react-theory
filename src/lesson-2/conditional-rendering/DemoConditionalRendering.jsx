import React, { Component } from "react";

export default class DemoConditionalRendering extends Component {
  //Thuoc tinh cua Class
  loggedIn = true;
  userName = "Quyyy";

  checkLogIn = () => {
    if (this.loggedIn) {
      return <h1>Welcome {this.userName} to this page</h1>;
    }
    return <button className="btn btn-danger">Log In</button>;
  };
  render() {
    return (
      <div>
        {this.checkLogIn()}
        {/* {this.loggedIn ? (
          <h1>Welcome {this.userName} to this page</h1>
        ) : (
          <button className="btn btn-danger">Log In</button>
        )} */}
        {/* 
        {this.loggedIn && <h1>Welcome {this.userName} to this page</h1>}
        {!this.loggedIn && <button className="btn btn-danger">Log In</button>} */}
      </div>
    );
  }
}
