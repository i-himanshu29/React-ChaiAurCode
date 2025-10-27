import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); //useDispatch hook ko use kar ke hum action dispatch kar sakte hai store me
  //Dispatch reducer ko use kar ke store me value change karta hai
  const addTodoHandler = (e) => { //ye function form submit hone par call hoga and e event object hai
    e.preventDefault(); //ye default behavior ko roakta hai form ka jo page ko reload kar deta hai
    dispatch(addTodo(input)); // Dispatching the addTodo action with input as payload
    setInput(""); // Because we want ki jab form fill ho kar submit ho jaye to input field clean ho jaye that's why we pass empty string
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
