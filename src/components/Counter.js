import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
/*     increment() {
        // react could usually groups several setState() calls and runs in one shot - not good when updating state based on previous state value 
        this.setState({
            count: this.state.count + 1},
            () => {
                // calls to setState are asynchronus ==> we need callback / async await to execute the next statement after the state is updated 
                console.log(this.state.count);
        })
    } */

    // when we are updating a state based on its previous state value, we better pass a function as its param instead of an object
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), 
        // callback
        () => {
            // careful here: when its all done with updating the state five times? kinda confusing.
            console.log(this.state.count);
        })
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                {/* Nice and Easy Increment - single time */}
                {/* <button onClick={() => this.increment()} >Increment</button> */}
                <button onClick={() => this.incrementFive()} >Increment</button>
            </div>
        )
    }
}

export default Counter
