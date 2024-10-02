const express = require('express')
const {z}= require('zod')
const {createtodo,updatetodo} = require("./types")
require('dotenv').config()
const  mongoose = require('mongoose')
const { todo } = require('./db')


const app = express()


app.use(express.json())

// How many routes do we require !! 
// creating a todo item 
// Deleting a todo item 
// List all the todos it has been created !! 

app.get('/',(req,res)=>{
    res.send("Hii")
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("DB connected ")
}).catch((err)=>{
  console.log(err)
})

 
app.get('/all-todo',async (req,res)=>{

  // TODO : Get all todos from mongodb :
    
    const ans = await todo.find({})
    console.log(ans)
    
    res.json({ msg : ans })
})





// User will send to the server : 
// {
      // title:string 
      // description : string 

// }

app.post('/create-todo',async (req,res)=>{

    const {title , description} = req.body
    
    
    const Parsedpayload = createtodo.safeParse(req.body)

    if(!Parsedpayload.success){
      res.status(411).json({ message: 'Wrong Inputs' })
      return 
    }

    // TODO : Put it in the mongodb
    
    await todo.create({
      title:title,
      description:description,
      completed: false 
    })

    
    res.send("Creating a Todo item POST ROUTE")                            

})

app.put("/completed",async (req,res)=>{
      
    const updatepPayload = updatetodo.safeParse(req.body)
    
    if(!updatepPayload.success){
      res.status(411).json({message:"Wrong Inputs , Please Update it !!"})
      return;
    }

    // TODO : Update in the mongodb 

    await todo.update({
         _id : req.body.id
    },{
      completed:true
    })

    res.status(500).json({msg:"To do marked Completed !!"})


})

app.listen(3000,()=>{
    console.log(`app is running at port 3000 🚀`)
})