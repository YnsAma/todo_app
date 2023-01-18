import React from 'react'
import"./form.css"
import {HiPlusCircle} from 'react-icons/hi'

function Form({todo,setTodo,addtodo,show}) {
  return (
    <>
    <div className='add-item-container'>
      <input
      onChange={(e)=>(setTodo(e.target.value))}
      className='item-body'
      value={todo}
      type="text" 
      placeholder='Add Item' />
      <button 
      onClick={()=>addtodo(todo)}
      className='add-item-button'><HiPlusCircle className='add-item-icon'/></button>
    </div>
    {show? <p>Can't add an empty todo</p>:""}
    </>
  )
}

export default Form