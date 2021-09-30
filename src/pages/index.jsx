import React from 'react'
import { useTasks } from '../context/taskContext'
import Layout from '../componets/Layout'

const Home = () => {

  const { tasks } = useTasks()
  console.log(tasks)

  return (

    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <div className="block">
            <h2 className="text-2xl">There are no tasks</h2>
            <VscTasklist size="8rem" />
          </div>
        ) : (
          <div className="w-7/10">
            {tasks.map((task, i) => (
              <div
                key={task.id}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center"

              >
                <span className="text-5xl mr-5">{i}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                    <button className="bg-red-700 hover:bg-red-200 px-3">Delete</button>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>

  )
}

export default Home
