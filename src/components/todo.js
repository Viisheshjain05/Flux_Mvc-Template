import uniqid from "uniqid";

const Todo = {
  id: uniqid.time(),
  complete: false,
  text: "",
};

export default Todo;

// import Immutable from 'immutable';
// import uniqid from 'uniqid'

// const Todo = Immutable.Record({
//   id: uniqid.time(),
//   complete: false,
//   text: '',
// },"BaseTodo");

// export default Todo;
