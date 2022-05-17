import React, { Component, PureComponent } from 'react'

export default class Counter extends PureComponent {
    //Chay dau tien va chi chay 1 lan
    //Dung constructor de khoi tao state
    constructor(props){
        super(props);
        console.log('Counter > Constructor');
        this.state ={
            counter: 0,
        }
    }

    increase = () =>{
        this.setState((state)=>({
            counter: state.counter +=1,
        }));
    }

    decrease = () =>{
        this.setState((state)=>({
            counter: state.counter -=1,
        }));
    }
    
    // Chay lai moi khi component duoc update
    //Dung de tranh viec component re-render khong can thiet (performance), khi return false thi se dung
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.randomNumber !== this.props.randomNumber || 
    //         nextState.counter !== this.state.counter){
    //         return true;
    //     }
    //     return false;
    // }
    //Chay sau contructor
    // Chay lai moi khi component duoc update (props || setState || forceUpdate)
    render() {
        console.log('Counter > render');
        return (
            <div className="text-center">
                <div className="display-4">Counter: {this.state.counter}</div>
                <div>Random number prop: {this.props.randomNumber}</div>
                <button onClick={this.increase}>Increase</button>
                {' '}
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
    //Chay lai 1 lan
    //Chay sau khi component da render
    //Dung de thuc hien cac side-effects (call api )
    componentDidMount(){
        // this.iterval = setInterval(()=>{
        //     console.log('interval');
        // }, 1000)
        console.log('Counter >Didmount');
    }
    //Chay lai moi khi cpm duoc update (props||setState||forceUpdate)
    //Chay sau khi cpm da update
    //Han che dung va khi dung phai rat can than
    //Co the dung de call api dua vao su thay doi cua props
    componentDidUpdate(prevProps, prevState){
        // if(prevProps.useId != this.props.useId){
        //     callapi();
        // }
        console.log('Counter > componentUpdate');
    }
    //Chay 1 lan khi cpn bi xoa khoi DOM
    //Dung de loai bo nhung thu du thua truoc khi cpn bi xoa khoi dom
    componentWillUnmount(){
        // clearInterval(this.clearInterval);
        console.log("DemoLifeCycle > componentWillUnmount");
    }
}
