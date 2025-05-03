import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { db, collection, getDocs } from './firebase';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {                                //Fetch tasks from the database
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const taskList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setTasks(taskList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daily Task Planner</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTaskChange={fetchTasks} />
    </div>
  );
}

export default App;
