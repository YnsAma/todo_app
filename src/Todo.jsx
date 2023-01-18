import React from 'react'
import './Todo.css'
import { RiDeleteBin2Fill } from  'react-icons/ri'
function Todo({data,completedTodo,DeletTodo,handleClick}) {
  
  return (
    <div className='todoConatiner'>
      {
        !data.length? <p>...loiding</p>:data.map((todo,index)=>{return (
          <div className='todo-card' key={index} 
          onClick={handleClick}
          >
            
            <div className='todo-duo'>
              <button onClick={()=>completedTodo(todo.title)} className="todo-mark-button"/>
              <div className='todo-body'>
                {todo.title}
              </div>
            </div> 
            <button className='delet-button' onClick={()=>DeletTodo(todo.title)}><RiDeleteBin2Fill className='delet-icon'/></button>
          </div>
          )})
      }
    </div>
  )
}

export default Todo