import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onTaskChange }) { //List of all the tasks 
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onChange={onTaskChange} />
      ))}
    </div>
  );
}

export default TaskList;
