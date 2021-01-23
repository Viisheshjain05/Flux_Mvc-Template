"useStrict";
import ActionTypes from "../utils/actions/TodoActionsTypes";
import AppContainer from "../AppContainer";
import uniqid from "uniqid";

class TodoStore {
  constructor() {
    this.TodoList = [];
    this.CurrentTodo = {
      text: "",
      id: "InitialTodo",
      complete: false,
    };
  }

  getTodoList(props) {
    return props;
  }

  reduce(props) {
    // console.log("TodoStore Reducer props", props);
    switch (props.type) {
      case ActionTypes.EDIT_TODO:
        this.CurrentTodo.text = props.text;
        // const TodoState = { text: this.CurrentTodo.text };
        AppContainer({
          TodoList: this.TodoList,
          CurrentTodo: this.CurrentTodo,
        });

        return "";

      case ActionTypes.ADD_TODO:
        this.CurrentTodo.complete = true;
        this.TodoList.push(this.CurrentTodo);

        const { text, complete, id } = this.CurrentTodo;
        // update old Todo For new one
        AppContainer({
          TodoList: this.TodoList,
          CurrentTodo: { id, text, complete },
        });

        this.CurrentTodo = {
          id: uniqid.time(),
          text: "",
          complete: false,
        };
        return "";

      case ActionTypes.DELETE_TODO:
        // const newTodoList = state.TodoList.slice();
        // newTodoList.splice(
        //   newTodoList.findIndex((e) => e === action.deleteTodo),
        //   1
        // );

        console.log(props.id);
        console.log(
          "Deleted array DelNo",
          this.TodoList,
          this.TodoList.findIndex((e) => e.id === props.id)
          // alfadel
        );
        const alfadel = this.TodoList.splice(
          this.TodoList.findIndex((e) => e.id === props.id),
          1
        );

        console.log("todolist delTodo", alfadel);

        return "";

      default:
        return "";
    }
  }
}

export default new TodoStore();
