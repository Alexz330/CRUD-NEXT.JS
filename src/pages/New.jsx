import Layout from "../componets/Layout"
import { useState } from "react"
import { useTasks } from "../context/taskContext"
import { useRouter } from "next/dist/client/router"
const TaskFormPage = () => {

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }

  const router = useRouter();

  const {createTasks} = useTasks()

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(task)
    createTasks(task.title, task.description)
    router.push('/')

  } 

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Add a task </h1>
        <input
          className="bg-gray-800 focus:text-gray-100 focus-outline-none w-full py-3 px-4 mb-5"
          name="title"
          type="'text'"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          className="bg-gray-800 focus:text-gray-100 focus-outline-none w-full py-3 px-4 mb-5"
          rows="2"
          placeholder="Write a description"
          name="description"
          onChange={handleChange}
        >

        </textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-3 rounded-sm disabled:opacity-30"
          disabled={!task.title}>

          Save

        </button>
      </form>
    </Layout>
  )
}

export default TaskFormPage
