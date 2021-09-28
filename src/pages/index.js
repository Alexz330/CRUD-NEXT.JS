import React from 'react'
import { useTask } from '../context/taskContext'
import Layout from '../componets/Layout'

const Home = () => {

  const {task} = useTask()
  console.log(task)

  return (

    <Layout>

      <div>
        Hello world
      </div>

    </Layout>
   
  )
}

export default Home
