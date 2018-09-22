import React from 'react';

//Functional component (ES6 type function)
const charComponent = (props) => {
    return (
        <div className="CharComponent">
         <p onClick={props.click}>{props.char}</p>
        </div>
    )
};

export default charComponent;