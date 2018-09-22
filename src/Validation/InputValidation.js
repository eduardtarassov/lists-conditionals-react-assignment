import React from 'react';

//Functional component (ES6 type function)
const inputValidation = (props) => {
    return (
        <div className="InputValidation">
            {props.dataSize <= props.threshold ?
                <p>Text is too short</p>
                :
                <p>Text is long enough</p>
            }
        </div>
    )
};

export default inputValidation;