import React, {useState} from 'react';

const Function = (props) => {
    return(
        <div>
            <h1>{props.last_name}, {props.first_name}</h1>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hair_color}</p>
        </div>
    )
}

export default Function;