// Sepration file for Views and state logic || MVC
// First file connected from index .
// all state logic and deside connection for views to state logic

import React from "react";
import AppViews from "./views/AppViews";
// import AppViewDup from "./views/AppViewDup";
import TodoActions from "./utils/actions/todoActions";
import TodoStore from "./container/todoStore";

const AppContainer = (props) => {
  // const [stateData, setstateData] = useState("");

  let getState = "";
  if (props.CurrentTodo !== undefined) {
    getState = {
      currentText: props.CurrentTodo.text,
      TodoList: props.TodoList,
      CurrentTodo: props.CurrentTodo,
    };

    console.log("hii", window.objState);
  } else {
    getState = {
      currentText: "",
      TodoList: [],
      CurrentTodo: "",
    };
  }

  const getActions = {
    onEditTodo: (e) =>
      TodoStore.reduce(TodoActions.editTodo({ text: e.target.value })),
    onAdd: () =>
      TodoStore.reduce(TodoActions.addTodo({ text: getState.currentText })),
    onDel: (id) => TodoStore.reduce(TodoActions.delTodo({ id: id })),
  };

  const objState = {};
  // Convert Objects into array
  for (const [key, value] of Object.entries(getActions)) {
    for (const [key1, value1] of Object.entries(getState)) {
      objState[key1] = value1;
    }
    objState[key] = value;
  }
  console.log("objState", objState);

  // if (objState.currentText !== "") {
  window.objState = objState;
  // }

  // const f = AppViews({...objState})

  // const getDataByObj = () => {
  //   let arr = []
  // arr.push(objState)
  //   console.log("objState", objState);
  // Todo To setup A Converter flow to pass data in component return formate
  return (
    <>
      {/* <div>{AppViewDup(objState)}</div> */}

      <div>
        <AppViews {...getActions} {...getState} />
      </div>

      {/* {objState !== undefined ? (
          <div>
            {" "}
            <AppViews {...objState} />{" "}
          </div>
        ) : null} */}
      <div>hii</div>

      {/* <div>
        {objState.currentText !== "" ? (
          getDataByObj()
        ) : (
          <AppViews {...arr} />
        )} */}
      {/* </div> */}
    </>
  );
};

export default AppContainer;

// onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
// onDeleteTodo: TodoActions.deleteTodo,
// onStartEditingTodo: TodoActions.startEditingTodo,
// onStopEditingTodo: TodoActions.stopEditingTodo,
// onToggleAllTodos: TodoActions.toggleAllTodos,
// onToggleTodo: TodoActions.toggleTodo,
// onUpdateDraft: TodoActions.updateDraft,
