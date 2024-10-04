import React from 'react';

const Todos = (props) => {
  // Check if props.todos and props.todos.msg exist and is an array
  // const todos = props.todos || []; // Default to an empty array if msg is not defined

  return (
    <div style={{margin:10}}>
      {props.todos.map((todo, index) => (
          <div key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
          </div>
        ))
      }
    </div>
  );
}

export default Todos;
