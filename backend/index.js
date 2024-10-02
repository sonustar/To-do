const express = require('express')
const {z}= require('zod')
const {createtodo,updatetodo} = require("./types")

const app = express()


app.use(express.json())

// How many routes do we require !! 
// creating a todo item 
// Deleting a todo item 
// List all the todos it has been created !! 

app.get('/',(req,res)=>{
    res.send("Hii")
})




app.get('/all-todo',(req,res)=>{
    res.send("List of all todos !!")
})

app.get('/create-todo',(req,res)=>{
  
  // TODO : Get all the Todos from  mongodb 
  
  res.send("List of all todos !!")


})


// User will send to the server : 
// {
      // title:string 
      // description : string 

// }

app.post('/create-todo',(req,res)=>{
    
    
    const Parsedpayload = createtodo.safeParse(req.body)

    if(!Parsedpayload.success){
      res.status(411).json({ message: 'Wrong Inputs' })
      return 
    }

    // TODO : Put it in the mongodb 
    
    res.send("Creating a Todo item POST ROUTE")                            

})

app.put("/completed",(req,res)=>{
      
    const updatepPayload = updatetodo.safeParse(req.body)
    
    if(!updatepPayload.success){
      res.status(411).json({message:"Wrong Inputs , Please Update it !!"})
      return;
    }

    // TODO : Update in the mongodb 

})

app.listen(3000,()=>{
    console.log(`app is running at port 3000 🚀`)
})