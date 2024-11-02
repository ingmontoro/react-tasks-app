import React, { useState } from 'react'
import '../styles/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleAddTask = e => {
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      name: input,
      completed: false
    }

    props.onSubmit(newTask)

    setInput('')
  }

  return (
    <form
      className='task-form'
      onSubmit={handleAddTask}>
      <input
         className='task-input'
         type='text'
         placeholder='Escribe una tarea'
         name='text'
         value={input}
         onChange={handleChange} />
       <button className='task-button'>
        Agregar tarea
       </button>
    </form>
  )
}

export default TaskForm