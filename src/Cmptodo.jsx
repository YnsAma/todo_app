import React from 'react'
import './Cmptodo.css'
import { MdOutlineDone } from 'react-icons/md';
import { RiDeleteBin2Fill } from  'react-icons/ri';
function Cmptodo({data,DeletTodo,completedTodo}) {
  return (
    <div>
      {
        !data.length? <p>...loiding</p>:data.map((todo,index)=>{return (
          <div className='cmptodo-card' key={index}>
            <div className='todo-duo'>
              <button className='cmpbutton'
              onClick={()=>completedTodo(todo.title)}><MdOutlineDone className='icon'/></button>
              <div className='cmptodo-body'>
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

export default Cmptodo