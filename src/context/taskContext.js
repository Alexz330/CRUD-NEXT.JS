import { createContext,useContext,useState } from "react";
import { v4 as uuid} from "uuid";


export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext)



export const TaskProvider = ({children}) =>{

    const [tasks, setTask] = useState([{id:uuid(),title:"first task", description:"one task"}]);

    const createTasks =(title, description) =>{
        setTask([...tasks,{
            title,description, id:uuid()
        }])
    }

    return(
        <TaskContext.Provider value ={{tasks, createTasks}} >
            {children}
        </TaskContext.Provider>
    
    )
}