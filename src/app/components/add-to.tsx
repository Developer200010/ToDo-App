"use client"
import { set } from 'mongoose';
import React, { FormEvent, useState } from 'react'
import { useTodos } from '../store/todos';

const AddToDo = () => {
    const[todo, setTodo] = useState('');
    const{handleAddToDo} = useTodos();
    const handleForm = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAddToDo(todo);
        setTodo('');
    }
  return (
    <form onSubmit={handleForm}>
        <input type="text" name="" id="" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='enter you task' />
        <button type='submit'>Add</button>
        <h1>{todo}</h1>
    </form>
  )
}

export default AddToDo;