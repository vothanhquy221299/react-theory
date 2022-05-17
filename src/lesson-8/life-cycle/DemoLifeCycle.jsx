import React, { Component } from 'react'
import Counter from './Counter'

export default class DemoLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('DemoLifeCycle > constructor');
        this.state = {
            isRemoveCounter: false,
            number: 0,
        }
    };

    randomNumber = () =>{
        this.setState({number: Math.random()});
    }

    removeCounter = () =>{
        this.setState({isRemoveCounter: true})
    }
    render() {
        console.log('DemoLifecycle > render');
        return (
            <div className="text-center">
                <div className="display-4">
                    Random Number: {this.state.number}
                </div>
                <button onClick={this.randomNumber}>Random</button>
                <button>Remove Counter</button>
                {/* {this.state.isRemoveCounter && <Counter/>} */}
                <Counter randomNumber={this.state.number}/>
            </div>
        )
    }

    componentDidMount(){
        console.log('DemoLifecycle > Didmount');
    }
}
