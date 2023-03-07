import React from 'react'
import Task from './Task'


const Tasks = ({tasks,handleDelete,showAlert }) => {

  return (
    <div>
    {tasks.map((task) => {
     return <Task task={task} showAlert={showAlert}  handleDelete={handleDelete} key={task.id} />

    })

    }
    </div>
  )
}

export default Tasks
