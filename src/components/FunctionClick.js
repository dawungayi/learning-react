import React from 'react'
import Greet from './Greet';

function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked");
    }

    return (
        <div>
            {/* We want the event handler to be a function, not a function call: no ()!!! */}
           <button onClick={clickHandler}>click</button> 
        </div>
    )
}

export default FunctionClick
