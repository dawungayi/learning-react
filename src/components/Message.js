import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super();
        // state == reserved kw in React
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    
    changeMessage() {
        // use setState so React will re-render the component
        // do not mutate state directly: use setState() instead to alter the state of the component
        this.setState({
            message: "Thank you for Subscribing"
        }) 
    }

    render() {
        // has to return either null or some HTML
        // props can be accessed via this.props - reserved for it - no need to pass props as parameter
        // props are IMMUTABLE !!!
        // this.props.name = "Jeffery" // throws Error
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage() } >Subscribe</button>
            </div>
        )
    }
}

export default Message;