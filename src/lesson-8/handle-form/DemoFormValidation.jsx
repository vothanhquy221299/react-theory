import React, { Component } from "react";

export default class DemoFormValidation extends Component {
  state = {
    values: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
    isValidForm: false,
    isValidEmail: false,
    isValidPassword: false,
  };
  handleOnChange = (event) => {
    // console.log(event.target.name);
    const { name, value } = event.target;
    this.setState(
      {
        values: {
          ...this.state.values,
          [name]: value,
        },
      },
      () => {
        console.log(this.state.values);
      }
    );
  };

  handleError = (event) => {
    const { name, value } = event.target;
    let { isValidEmail, isValidPassword } = this.state;

    let errorMessage = "";

    //validate empty
    if (value === "") {
      errorMessage = `${name} cannot be empty!`;
    }
    switch (name) {
      case "email":
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if(value && !value.match(emailRegex)){
          errorMessage = 'invalid email'
        }
        isValidEmail = errorMessage === "" ? true : false;
        break;

      case "password":
        if(value && (value.length < 6 || value.length > 10)){
          errorMessage = 'password must be 6 to 10 characters!'
        }
        isValidPassword = errorMessage === "" ? true : false;
        break;

      default:
        break;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: errorMessage,
      },
      isValidEmail,
      isValidPassword,
    }, () =>{
      this.validateForm();
    });
  };

  validateForm = () =>{
    const {isValidEmail, isValidPassword} = this.state;
    this.setState({
      isValidForm: isValidEmail && isValidPassword,
    })
  }

  handleSubmit = (event) => {
    //Ngan chan viec reload page
    event.preventDefault();
    if(this.state.isValidForm){
    console.log("submitted");
    console.log(this.state.values);
    } else{
      console.log('Form has error!');
    }
  };

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
              value={this.state.values.email}
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="text-danger">{this.state.errors.email}</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.values.password}
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="text-danger">{this.state.errors.password}</small>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isValidForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
