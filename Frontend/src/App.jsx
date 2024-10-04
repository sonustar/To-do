import { useEffect, useState } from 'react'
import CreateTodo from '../Components/CreateTodo'
import Todos from '../Components/Todos'
import axios from 'axios';


function App() {
  const [todos, settodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/all-todo");
        
        console.log(response.data)
        settodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);
    

  // useEffect(async()=>{
    
  //   // const response = await fetch("http://127.0.0.1:3000/all-todo")
  //   // const data = await response.json()

  //   // settodos(data)


  // },[])

  return (
    <>
      <h1> Create To do 🚀</h1>
      <div style={{flexDirection:"column"}}>

      <CreateTodo/>
      </div >
      <div>
        <h2> List of all the todos </h2>
        <Todos todos={todos}/>
      </div>
    </>
  )
}

export default App
