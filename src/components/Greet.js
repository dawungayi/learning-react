import React from 'react'

// we use PascalCase for names of components
// preference is to use arrow functions
// also make sure that what we return is under a single HTML element
// const Greet = () => {
//     return <h1> Hello Desmond </h1>
// }

// using destructuring in the parameter - get the fields with these names straight up from the props parameter passed, like
// const Greet = ({name, heroName}) => {   

// destructuring in the body
const Greet = (props) => {
    const { name, heroName } = props;

    // { } tells React to evaluate the expression
    return (
        <div>
            <h1> Hello {name} aka {heroName} </h1>
            {/* {props.children} */}
        </div>

    )
}
// good thing aboout default exports is we can name it whatever in the .js file where it's imported
export default Greet;