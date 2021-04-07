// Creating a HOC for Global State
// Running a process and keep updateing state and action can have affect to work like redx

// process !!
//  1)   Get Global State 1st arg dispatch 2nd arg then store it inside Index.js file as root of project
//  2)   Using provider Context Api in order to pass it from root to all over the project as redux.

//! Caution
// Looping Side Effects
// CleanUp code || Sepration of state and Dispatches
// Do not Connect state logic Directly form views. || Seperate concern Over MVC + Flux

import React from "react";

const withState = (
  WrappedComponent,
  dipatchFunction = null,
  stateFunction = null
) => {
  // {...props} IS to pass all remaining props to down to component
  const alfa = ({ ...props }) => <WrappedComponent name="HOC" {...props} />;
  return alfa;
};

export default withState;



