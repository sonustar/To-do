import React from 'react'

const CreateTodo = () => {
  return (
    <div style={{ margin:20}} >

       <input  style={{padding:5 , margin:10}} type="text" placeholder='Select the title for Todo' /><br />
       <textarea  style={{resize : 'none' , padding:5 , margin:10}} type="text" placeholder='Give the description' /><br />

       <button style={{margin:10}}> Add to do </button>

    </div>
  )
}

export default CreateTodo