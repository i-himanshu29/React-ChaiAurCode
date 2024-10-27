import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return(
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white items-center px-3 py-2 rounded-3xl">
              <button
               onClick={()=>setColor("red")}
               className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"red"}}>
              Red
              </button>
              <button
                onClick={()=>setColor("green")}
               className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"green"}}>
              Green
              </button>
              <button
              onClick={()=>setColor("yellow")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"yellow"}}>
              Yellow
              </button>
              <button
                onClick={()=>setColor("blue")}
               className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"blue"}}>
              Green
              </button>
              <button
              onClick={()=>setColor("pink")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"pink"}}>
              Yellow
              </button>
              <button
                onClick={()=>setColor("orange")}
               className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"orange"}}>
              Green
              </button>
              <button
              onClick={()=>setColor("brown")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"brown"}}>
              Yellow
              </button>
              <button
              onClick={()=>setColor("cyan")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"cyan"}}>
              Yellow
              </button>
              <button
                onClick={()=>setColor("magenta")}
               className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"magenta"}}>
              Green
              </button>
              <button
              onClick={()=>setColor("violet")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{backgroundColor:"violet"}}>
              Yellow
              </button>
            </div>
        </div>
    </div>
  )
}

export default App
