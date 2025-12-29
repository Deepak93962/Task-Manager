 import { useState } from "react";
 import Navbar from "./components/Navbar";
 import Stats from "./components/Stats";
 import Filters from "./components/Filters";
 import TaskList from "./components/TaskList";
 import CreateTaskModal from "./components/CreateTaskModal";
 import EditTaskModal from "./components/EditTaskModal";


 export default function App() {
   const [tasks, setTasks] = useState([]);
   const [editingTask, setEditingTask] = useState(null);


   const addTask = (task) => {
     setTasks([...tasks, { ...task, id: Date.now() }]);
   };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };
  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setEditingTask(null);
  };


  const updateProgress = (id, newProgress) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, progress: newProgress, completed: newProgress === 100 }
          : t
      )
    );
  };

  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              progress: !t.completed ? 100 : t.progress,
            }
          : t
      )
    );
  };


   return (
     <>
       <Navbar />
       <div className="container mt-4">
         <Stats tasks={tasks} />

         <div className="row">
           <div className="col-md-3 sidebar">
             <Filters />
           </div>

           <div className="col-md-9">
             <TaskList
               tasks={tasks}
               deleteTask={deleteTask}
               updateProgress={updateProgress}
               toggleCompleted={toggleCompleted}
               setEditingTask={setEditingTask}
             />
             {editingTask && (
               <EditTaskModal
                 task={editingTask}
                 editTask={editTask}
                 close={() => setEditingTask(null)}
               />
             )}
           </div>
         </div>
       </div>

       <CreateTaskModal addTask={addTask} />
     </>
   );
 }
