 import { useState, useEffect } from "react";
 import TaskForm from "./components/TaskForm";
 import TaskList from "./components/TaskList";

 function App() {
   const [tasks, setTasks] = useState([]);

   // Load from localStorage
   useEffect(() => {
     const saved = JSON.parse(localStorage.getItem("tasks"));
     if (saved) setTasks(saved);
   }, []);

   // Save to localStorage
   useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   const addTask = (text) => {
     setTasks([...tasks, { id: Date.now(), text, completed: false }]);
   };

   const deleteTask = (id) => {
     setTasks(tasks.filter((t) => t.id !== id));
   };

   const toggleTask = (id) => {
     setTasks(
       tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
     );
   };

   return (
     <div className="container">
       <h1>📝 Task Manager</h1>
       <TaskForm addTask={addTask} />
       <TaskList
         tasks={tasks}
         deleteTask={deleteTask}
         toggleTask={toggleTask}
       />
     </div>
   );
 }

 export default App;
