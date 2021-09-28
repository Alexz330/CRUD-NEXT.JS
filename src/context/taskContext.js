import { createContext,useContext,useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext)



export const TaskProvider = ({children}) =>{

    const [tasks, setTask] = useState([{id:"id",title:"first task", description:"sone task"}]);


    return(
        <TaskContext.Provider value ={{tasks}} >
            {children}
        </TaskContext.Provider>
    
    )
}