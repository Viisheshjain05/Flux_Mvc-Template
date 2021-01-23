// Todo Objective to create Constructive Layout for Creating Web Apps
//Todo Uniqe Features [independent view, seperate component as per func, not need to change prev comp as functionality added ]

// Todo
// ! Layout Correctness Using HOC | Context | Reducer For global state
// ! Add Immutable Object For Main data Component structure as default or one place data use IMMUTABE lib.

// * Due to Returning Function chain the same function cannot be called multiple times as when function returns backward toward end it lead not to run another return function SOL - Use HOC

// * Way Forward Look for Calling A function when it gets returned to its old position or in middle when its getting back to its start

// * Example When Appview edits a todo it get to appView > actions > store > container > appView for looking returning back it create a loop which doesnt solve to its orignal purpose for it we need to get call function in between when it was returning toward start.  

import React from "react";
import ReactDOM from "react-dom";
import TodoAppIndex from "./AppContainer";
// import HocExp   from "./hoc/HocExp";


ReactDOM.render(<TodoAppIndex />, document.getElementById("root"));
// ReactDOM.render(<HocExp />, document.getElementById("root"));
