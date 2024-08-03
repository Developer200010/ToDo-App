import React from 'react'
import AddToDo from './components/add-to'
import ToDos from './components/todos'
import Navbar from './components/navbar'
import './globals.css'
const page = () => {
  return (
    <main>
      <h1>ToDoApp</h1>
      <Navbar/>
      <AddToDo/>
      <ToDos/>
    </main>
  )
}

export default page