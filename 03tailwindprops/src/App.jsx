
import Card from "./components/Card"


function App() {

  
  let myObj = {
    username:"Himanshu",
    age:21
  }

  let newArr = [1,2,3]

  return (
    <div className="flex-col justify-center items-center">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>

      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18820904/pexels-photo-18820904/free-photo-of-young-woman-wearing-a-white-smock-dress-in-an-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
          <div class="pt-6 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure> */}

        <Card username="chaiaurcode"/>
        <Card username="chaiaurcode" someObje={myObj} btnText="click me"/>
        <Card username="chaiaurcode" someObje={newArr} />
    </div>
  )
}

export default App
