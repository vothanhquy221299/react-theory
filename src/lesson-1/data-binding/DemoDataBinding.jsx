import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    renderStudent = () =>{
        const student ={
            fullName: 'Quyyy',
            age: 21,
            className: 'BC12'
        }
        const {fullName, age, className} = student;
        return(
            <div>
                <p>Name: {fullName}</p>
                <p>Age: {age}</p>
                <p>Class Name: {className}</p>
            </div>
        )
    }
    render() {
        const fullName = 'Vo Thanh Quy';
        const birthYear = 1999;
        return (
            <div>
                <p>This is {fullName}, {2021-birthYear} years old</p>
                <h2>Student Info</h2>
                {this.renderStudent()}
            </div>
        )
    }
}
