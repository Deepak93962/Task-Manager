 import { useState } from "react";
 import Navbar from "./components/Navbar";
 import Stats from "./components/Stats";
 import Filters from "./components/Filters";
 import TaskList from "./components/TaskList";
 import CreateTaskModal from "./components/CreateTaskModal";

 export default function App() {
   const [tasks, setTasks] = useState([]);

   const addTask = (task) => {
     setTasks([...tasks, { ...task, id: Date.now() }]);
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
             <TaskList tasks={tasks} />
           </div>
         </div>
       </div>

       <CreateTaskModal addTask={addTask} />
     </>
   );
 }
