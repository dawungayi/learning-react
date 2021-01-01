import React, { Component } from "react";

class Welcome extends Component {
    
    render() {
        // has to return either null or some HTML
        // props can be accessed via this.props - reserved for it - no need to pass props as parameter
        // props are IMMUTABLE !!!
        // this.props.name = "Jeffery" // throws Error
        console.log(this.props);
        return (
            <div>
                <h2>Welcome {this.props.name} from {this.props.city}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;