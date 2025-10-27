import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //properties....
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  //functionalities......
  addTodo: (todo) => {},
  // their method should be defined in app.js , not there.
  //Context api is not made for the very large project.
  // Redux or Zustang are used in large project
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
