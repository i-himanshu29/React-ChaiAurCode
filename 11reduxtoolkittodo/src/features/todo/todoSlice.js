import {createSlice,nanoid} from '@reduxjs/toolkit'

//state hai
const initialState={
    todos:[{id:1,text:"Hello world"}]
}

// function sayHello(){
//     console.log("hello")
// }

export const todoSlice = createSlice({  // createSlice ek method hai
    name:'todo',
    initialState, // every slice has a initial state,initialState yaha bhi declear kar sakte the but humne upar kiya hai
    reducers:{ // isme properties aur function aate hai
        addTodo:(state,action)=>{//properties ke andar always use state and action
            const todo = {
                id:nanoid(),//Date.now() bhi use kar sakte the
                text:action.payload//payload->object hai - id , email aa sakta hai
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        },

        //update HW ..do it
        // updateTodo:(state,action)=>{
        //     state.todos
        // }

    }
})
// export functionalities -> components
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer