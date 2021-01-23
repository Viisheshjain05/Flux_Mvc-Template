//Todo Today Total Functionality for setup template Save [AddTodo, DeleteTodo, completeTodo]
//Todo Today Remove All State controles in AppControler File

//  Only Views || Pure HTML Css in js 
//  passing all logic and State needs through props from app Container Props


"useStrict";

import React from "react";
import "./styles/AppView.css";



const AppViews = (props) => {
  // window.props = props;
  console.log("-----------Appview props-----------", props);
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
};

const Header = (props) => {
console.log("headerprops",props)
  return (
    <>
      <div>ToDo App</div>

      <input type="text" onChange={(e) => props.onEditTodo(e)} />

      <input type="submit" value="Submit" onClick={(e) => props.onAdd(e)} />
    </>
  );
};

const Main = (props) => {
  console.log("mainProps", props);
  return (
    <>
      <div> ToDo App </div>
      {/* Todo Add Delete Functionality */}
      <DisplayTodo {...props} delMe={(id) => props.onDel(id)} />
    </>
  );
};
const Footer = (props) => {
  return (
    <>
      <div> TodoEnd </div>
    </>
  );
};

const DisplayTodo = (props) => {
  
  console.log("appView props", props);
  const f = props.TodoList.map((e) => (
    <p key={e.id} value={e.text} onClick={props.delMe(e.id)}>
      {e.text}
    </p>
  ));

  return (
    <>
      <div>{f.map((e) => e)}</div>
    </>
  );
};

export default AppViews;
