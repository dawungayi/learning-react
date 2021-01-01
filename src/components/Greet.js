import React from 'react'

// we use PascalCase for names of components
// preference is to use arrow functions
// also make sure that what we return is under a single HTML element
// const Greet = () => {
//     return <h1> Hello Desmond </h1>
// }
// even better
const Greet = (props) => {
    console.log(props);
    // { } tells React to evaluate the expression
    return (
        <div>
            <h1> Hello {props.name} aka {props.heroName} </h1>
            {props.children}
        </div>

    ) 
}
// good thing aboout default exports is we can name it whatever in the .js file where it's imported
export default Greet;