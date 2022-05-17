import React, { Component } from "react";

export default class DemoHandleForm extends Component {
    state ={
        email: '',
        password: '',
    };
    handleOnChange = event =>{
        // console.log(event.target.name);
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        }, () =>{
            console.log(this.state);
        });
    };

    handleSubmit = event =>{
        //Ngan chan viec reload page 
        event.preventDefault();
        console.log('submitted');
        console.log(this.state);
    }

    render() {
    return (
      <div className="container">
          <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value = {this.state.password}
              onChange = {this.handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
