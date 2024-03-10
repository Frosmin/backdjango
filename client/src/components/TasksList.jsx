import { useEffect } from "react";
import {getAllTasks} from '../api/tasks.api'

export function TasksList() {
 useEffect(() => {
  
    function loadTasks() {
        const res = getAllTasks()
        console.log(res)
    }

    loadTasks();
    
 }, []);
 
    return <div>TaskList</div>;
}