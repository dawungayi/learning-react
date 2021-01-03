import React from 'react'

function Person(props) {
    // console.log(props);
    const { person } = props;   // extract the person ppty from props
    return (
        <div>
            <h3>Hello I am {person.name}, still at {person.age}, and I love {person.skill}</h3>
        </div>
    )
}

export default Person
