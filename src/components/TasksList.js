import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import Task from './Task'
import '../styles/TasksList.css'

function TasksList() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      console.log('Getting...')

      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = task => {
    if (task.name.trim()) {
      task.name = task.name.trim()

      const newList = [...tasks, task]

      setTasks(newList)
    }
  }

  const deleteTask = id => {
    const newList = tasks.filter(task => task.id !== id)

    setTasks(newList)
  }

  const completeTask = id => {
    const theTask = tasks.find(task => { return task.id === id })

    theTask.completed = ! theTask.completed;

    const partialList = tasks.filter(task => task.id !== id)
    const completedList = partialList.filter(task => task.completed)
    const uncompletedList = partialList.filter(task => ! task.completed)

    if (theTask.completed) {
      setTasks([...uncompletedList, ...completedList, theTask])
    } else {
      setTasks([...uncompletedList, theTask, ...completedList])
    }
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='tasks-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              texto={task.name}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask} />
          )
        }
      </div>
    </>
  )
}

export default TasksList