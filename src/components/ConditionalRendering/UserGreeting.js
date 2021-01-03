import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // change this boolean to see the effect of conditional rendering
      isLoggedIn: true,
    };
  }

  render() {
    // Conditional Rendering UI in React

    // Approach #1a: if/else. Note: do NOT add if/else statements inside the JSX markup.
    // this is kinda cumbersome
    /* if (this.state.isLoggedIn) {
            return(
                <div> Welcome Desmond </div>
            )
        } else {
            return(
                <div> Welcome Guest </div>
            )
        } */
    
    // Approach #2: element variable approach - much cleaner than #1, but cannot be used in the return portion in the JSX
    /* let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Desmond</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return (
            <div>{message}</div>
        ) */

    // Approach #3: ternary conditional operator: BEST option: very readable and simple code
    /*     return this.state.isLoggedIn ? (
      <div>Welcome Desmond</div>
    ) : (
      <div>Welcome Guest</div>
    ); */

    // Approach #4: Short-circuit if we want to render something or nothing. 2nd Best option
    // evaluates LHS and if true, renders what is on RHS
    return this.state.isLoggedIn && <div>Welcome Desmond</div>
  }
}

export default UserGreeting;
