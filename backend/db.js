const mongoose = require("mongoose")


const todoSchema = mongoose.Schema({
     
  title:String,
  description : String,
  Completed : Boolean 

})


const todo = mongoose.model('todos',todoSchema)

module.exports = {
  todo
}