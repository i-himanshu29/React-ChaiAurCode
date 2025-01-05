
import {useState,useEffect} from "react"
import './App.css'
import { TodoProvider } from "./context"
import { TodoForm, TodoItem } from "./components"

function App() {
  const [todos,setTodos] = useState([]) // this todo is an array

  const addTodo =(todo)=>{ // this todo is not from the state
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))

    // or 
    // prev.map((eachVal)=>{
    //   if(eachVal.id===id){
    //     todo
    //   }
    // })
    
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id)) // filter work on true statement
  }

  const toggleComplete = (id)=>{
    //setTodos ek array hai hence map applied and map ke andar value ka acces mil jayega
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===
    id?{...prevTodo,completed:!prevTodo.completed}:
    prevTodo))
  }

  // Now understand localstorage with contextapi
  // Only one thing to understand, jo bhi value lega wo 'string' form me hogi to use 'json' me convert or deconvert karna pad sakta hai


  // useEffect method/hook -> application ke fist time load/render par local storage se value la kar todos(useState wala) me insert kar dega and usestate show kar dega
  // value layega kaise ? maan lo koi function bna kar local storage me ja raha hai

  // jab tak aap react/frontend me ho toh localstorage directly access kar sakte ho, unless you are in server side
  // use getItem to access
  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length>0){
    setTodos(todos)
   }
  }, [])

  // to set use -> setItem
  // Here we want to add the values in the local storage
  //some application have more then one useEffect
  //value get aur set karte time same lene ->like  todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* always prefer unique id from db or anywhere , don't go for index untill it is a last option */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                              <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
