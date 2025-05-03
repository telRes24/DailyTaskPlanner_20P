import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase';
import '../styles.css';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await addDoc(collection(db, "tasks"), {
      title,
      dueDate,
      priority,
      completed: false
    });
    setTitle('');
    setDueDate('');
    setPriority('low');
    onTaskAdded();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          placeholder="Enter new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          className="form-input"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;
