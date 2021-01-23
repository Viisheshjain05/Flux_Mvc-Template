//Todo Today Total Functionality for setup template Save [AddTodo, DeleteTodo, completeTodo]
// Todo Today Remove All State controles in AppControler File
"useStrict";

import React from "react";
import "./styles/AppView.css";

const AppViewDup = (props) => {
  console.log("-----------Appview props-----------", props);
  return (
    <div>
      {Header(props)}
      {Main(props)}
      {Footer(props)}
      {/* <Main {...props} /> */}
      {/* <Footer {...props} /> */}
    </div>
  );
};

const Header = (props) => {
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
  // props = props.props;

  return (
    <>
      <div>ToDo App</div>
      {/* Todo Add Delete Functionality */}
      <DisplayTodo {...props} />
    </>
  );
};
const Footer = (props) => {
  return (
    <>
      <div>TodoEnd</div>
    </>
  );
};

const DisplayTodo = (props) => {
  console.log("appView props", props);
  const f = props.TodoList.map((e) => (
    <p key={e.id} value={e.text}>
      {e.text}
    </p>
  ));
  console.log("f", f);
  return (
    <>
      <div>{f.map((e) => e)}</div>
      <div style={{ backgroundColor: "black" }}>
        {props.TodoList.map((e) => (
          <p key={e.id} value={e.text}>
            {e.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default AppViewDup;
