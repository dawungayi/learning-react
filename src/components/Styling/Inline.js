import React from 'react'

// Using Inline styling: we got to use camelCase for CSS properties in the object defining the styles

const heading = {
    fontSize: "72px",
    color: "blue",

}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
