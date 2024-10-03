import { useState } from 'react'
import CreateTodo from '../Components/CreateTodo'
import Todos from '../Components/Todos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Create To do 🚀</h1>
      <div style={{flexDirection:"column"}}>

      <CreateTodo/>
      </div >
      <div>
        <h2> List of all the todos </h2>
        <Todos/>
      </div>
    </>
  )
}

export default App
