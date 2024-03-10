import { useEffect, useState } from "react";
import {getAllTasks} from "E:/DATOS/aplicaciones/phyton/backdjango/client/api/tasks.api";
import { TasksCard } from "./TaskCard";

export function TasksList() {

const [tasks, setTasks] = useState([]);

 useEffect(() => {
  
    async function loadTasks() {
        const res = await getAllTasks()
        setTasks(res.data);
    }

    loadTasks();
    
 }, []);
 
    return <div>
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}/>
          //<h1>{task.title}</h1>
       ))}            
     </div>

}