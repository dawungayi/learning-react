import React, { Component } from "react";

class Welcome extends Component {
    
    render() {
        // has to return either null or some HTML
        // props can be accessed via this.props - reserved for it - no need to pass props as parameter
        // props are IMMUTABLE !!!
        // this.props.name = "Jeffery" // throws Error
        
        // destructure the this.props object (only the ones we wish to use :))
        const {name, city} = this.props;
        // if we had states in this class, we destructure very similarly:
        // const {state1, state2} = this.state;

        console.log(this.props);
        return (
            <div>
                <h2>Welcome {name} from {city}</h2>
                {/* {children} */}
            </div>
        )
    }
}

export default Welcome;