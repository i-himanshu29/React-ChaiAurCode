import { createSlice, nanoid } from "@reduxjs/toolkit";

//state hai
const initialState = {
  // yaha humne initial state banaya hai
  todos: [{ id: 1, text: "Hello world" }],
};

// function sayHello(){
//     console.log("hello")
// }

// createSlice ek method hai jo slice banata hai jo reducer aur actions ko manage karta hai
export const todoSlice = createSlice({
  // createSlice ek method hai
  name: "todo",
  initialState, // every slice has a initial state,initialState yaha bhi declear kar sakte the but humne upar kiya hai
  reducers: {
    // isme properties aur function aate hai
    addTodo: (state, action) => {
      //properties ke andar always use state and action
      // action-> object hai jisme payload hota hai
      // payload-> jo data hum action ke through bhejte hai
      // state-> current state of the slice
      const todo = {
        id: nanoid(), //Date.now() bhi use kar sakte the
        text: action.payload, //payload->object hai - id , email aa sakta hai
      };
      state.todos.push(todo); // mutating state directly is allowed in Redux Toolkit
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //payload me id aayegi , filter se remove karenge
    },

    //update HW ..do it
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // payload = { id, text }
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text; // update text only
      }
    },
  },
});
// export functionalities -> components
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
