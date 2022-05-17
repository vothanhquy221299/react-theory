import React, { Component } from 'react'

export default class DemoHandlingEvents extends Component {
    // Ham khong tham so 
    greeting = () =>{
        alert('Welcome to my chanel');
    }

    // Ham co tham so 
    subcribe = name =>{
        alert(`Thank ${name} for subcribing`);
    }
    render() {
        return (
            <div>
                {/* () chay truoc khi click doi voi ham khong tham so  */}
                <button onClick={this.greeting} className="btn btn-info">Click me</button>
                <button onClick={() => this.subcribe('Qy')} className="btn btn-danger">Subcribe</button>
            </div>
        )
    }
}
