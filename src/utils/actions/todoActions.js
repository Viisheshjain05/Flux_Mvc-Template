"useStrict";

import ActionTypes from "./TodoActionsTypes";

const todoActions = {
  editTodo: (props) => ({ type: ActionTypes.EDIT_TODO, text: props.text }),
  addTodo: () => ({ type: ActionTypes.ADD_TODO }),
  delTodo: (id) => ({ type: ActionTypes.DELETE_TODO, id: id }),
};

export default todoActions;
