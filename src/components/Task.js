import React from 'react'
import '../styles/Task.css'
import { FaWindowClose } from "react-icons/fa";

function Task({ id, texto, completed, completeTask, deleteTask }) {
  return (
    <div className={`task-container${completed ? ' completed' : ''}`}>
      <div
        className='task-text'
        onClick={ () => completeTask(id) }>
        {texto}
      </div>
      <div className='task-container-icons'>
        <FaWindowClose
          className='task-icon'
          onClick={ () => deleteTask(id) }
        />
      </div>
    </div>
  )
}

export default Task