import React, { Component } from 'react'

//State dùng để quản lí những gì thay đổi trên màn hình
export default class DemoState extends Component {
    state ={
        loggedIn: false,
    }//state là 1 object 

    logIn = () =>{
        //K thể cập nhật state trực tiếp ntnay
        // this.state.loggedIn = true;
        //Cập nhật state thông qua hàm setState
        //Hàm setState là hàm bất đông bộ 
        this.setState({
            loggedIn: true
        });
        // console.log(this.state.loggedIn);//false
    }
    render() {
        // console.log('render');//render không gọi lại
        // console.log(this.state.loggedIn); //true
        return (
            <div className = "text-center">
                {this.state.loggedIn ? <h1>Welcome to this page</h1> : <button className="btn btn-success" onClick={this.logIn}>Log In</button>}
            </div>
        )
    }
}
