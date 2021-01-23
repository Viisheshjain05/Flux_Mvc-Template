// Example Displaying Use of HOC in Global state management 

import React from 'react';
import withState from "./withState"

const HocExp = (props) => {
    console.log(props)
    return (
        <div>
            hii my name is {props.name}
        </div>
    );
}

export default withState(HocExp);
