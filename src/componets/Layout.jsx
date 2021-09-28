import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import {useTasks} from '../context/taskContext'

const Layout = ({children}) => {

    const router = useRouter();
    const {tasks} = useTasks();

    return (
        <div className="h-screen bg-gray-900 text-white ">
            <header className="flex items-center bg-gray-800 px-28 py-5">
                <Link href="/">
                    <a>
                        <h1 className="font-black text-lg"> Task app</h1>
                    </a>
                </Link>
                
                <span className="ml-2 text-gray-400 font-bold "> {tasks.length} tareas</span>
                <div className="flex-grow text-right">
                    <button 
                        className="bg-green-500 hover:bg-green-400 px-3 py-2 font-blod rounded-sm inline-flex items-center"
                        onClick={()=> router.push("/New")}
                    >
                        <AiOutlinePlus className="mr-2"/>agregar tarea
                    </button>
                </div>
            </header>

            <main className="px-28 ">
                {children}
            </main>
            
        </div>
    )
}

export default Layout
