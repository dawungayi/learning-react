import React from 'react'

const Hello = () => {
    /** With JSX */
    return(
        // use className instead, since class is a JS keyword
        <div className="helloClass">
            <h1>Hello Dezz World</h1>
        </div>
    )

    /** No JSX */
    // return React.createElement(
    //     'div', 
    //     null,
    //     React.createElement('h1', null, 'Hello Dezz World'))
    // return React.createElement(
    //     'div', 
    //     {id: 'helloTag', className: 'helloClass'}, // key value pairs to apply attributes (use className instead, since class is a JS keyword)
    //     React.createElement('h1', null, 'Hello Dezz World'))
}

export default Hello

