import React, { useState } from 'react'

const CreateTodo = () => {

  // Have the local states basically : 
  const [title,settile] = useState("")
  const [description,setdescription] = useState("")


  return (
    <div style={{ margin:20}} >

       <input
       id='title'  
       style={{padding:5 , margin:10}} 
       type="text" 
       placeholder='Select the title for Todo'
       onChange={(e)=>{
           settile(e.target.value)
          //  console.log("Title :" , title)
       }}
       /><br />
       <textarea  style={{resize : 'none' , padding:5 , margin:10}} type="text" placeholder='Give the description' 
        id='desc'
        onChange={(e)=>{
          setdescription(e.target.value)
          // console.log("description :" , description)
      }}
       /><br />

       <button style={{margin:10}}
          
          onClick={async()=>{
              await fetch("http://localhost:3000/create-todo",{
                method:"POST",
                body:JSON.stringify({
                  title:title,
                  description:description
                }),
                headers: {
                  "Content-Type": "application/json",
                }
              }).then(async(res)=>{
                 const json = await res.json();
                 alert(json)
              })
              
              
            
          }}

       > Add to do </button>

    </div>
  )
}

export default CreateTodo