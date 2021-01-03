import React from 'react'

function Child(props) {
    // we can also destructure props as well if we want - not too useful here since props has only have 1 ppty  ;)
    return (
        <div>
            {/* this child component calls a method in the parent using props */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* Now if we want to pass params to the parent method */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default Child
