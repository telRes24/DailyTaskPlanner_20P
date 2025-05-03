import React from 'react';
import { db, doc, deleteDoc, updateDoc } from '../firebase';
import { format } from 'date-fns';

function TaskItem({ task, onChange }) {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "tasks", task.id));
    onChange();
  };

  const toggleComplete = async () => {
    await updateDoc(doc(db, "tasks", task.id), {
      completed: !task.completed
    });
    onChange();
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <div className="task-content">
        <div className={`task-title ${task.completed ? 'completed' : ''}`}>
          {task.title}
        </div>
        <div className="task-meta">
          <span className={`priority-tag priority-${task.priority}`}>
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="due-date">
              Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
            </span>
          )}
        </div>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
}
export default TaskItem;
