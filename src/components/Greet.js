import React from 'react'

// we use PascalCase for names of components
// preference is to use arrow functions
// const Greet = () => {
//     return <h1> Hello Desmond </h1>
// }
// even better
const Greet = () => <h1> Hello Desmond </h1>

// good thing aboout default exports is we can name it whatever in the .js file where it's imported
export default Greet;