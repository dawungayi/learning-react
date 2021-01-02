import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // APPROACH #3 cont'd
        // this.clickHandler = this.clickHandler.bind(this);

    }
    
    // clickHandler() {
    //     console.log(this);
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }

    // because of arrow function, the _this_ keyword always inherits the reference to the class
    clickHandler = () => {
        console.log(this);
        this.setState({
            message: "Goodbye"
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* the approach below will not work since _this_ in the event handler will be undefined  */}
                {/* <button onClick={this.clickHandler}>Click for Exit</button> */}
                {/* So we need to bind the event handler */}

                {/* APPROACH # 1: binding in the render method _this_ refers to the EventBind instance */}
                {/* the problem is that a brand new EventHandler is generated on every render ==> could have performance implications */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click for Exit</button> */}

                {/* APPROACH #2: Calling the event handler in the arrow function body  */}
                {/* remember that in an arrow function, the _this_ keyword always inherits the reference to the class. However, this has performance issues as well, same like approach #1, esp if we are rendering child components */}
                {/* <button onClick={() => this.clickHandler()}>Click for Exit</button> */}

                {/* APPROACH #3: BEST OPTION: Official React docs - binding the event handler in the constructor, not in the render method */}
                {/* <button onClick={this.clickHandler}>Click for Exit</button> */}

                {/* APPROACH #4: Also recommended by React - will be go-to approach in the future. Class ppty as arrow function: Change the way the method is defined in the class */}
                <button onClick={this.clickHandler}>Click for Exit</button>

            </div>
        )
    }
}

export default EventBind
