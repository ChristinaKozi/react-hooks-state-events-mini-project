import React from "react";
import Task from './Task'

function TaskList({ tasks,onHandleDelete }) {

  const taskItem = tasks.map(task=>{
    return <Task key={task.text} text={task.text} category={task.category} onHandleDelete={onHandleDelete} />
  })


  return (
    <div className="tasks">
      {taskItem}
    </div>
  );
}

export default TaskList;
