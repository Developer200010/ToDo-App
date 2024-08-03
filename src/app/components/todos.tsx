"use client"
import React from 'react'
import { useTodos } from '../store/todos';

const ToDos = () => {
    const{todos, toggleTodoCompleted, handleTodoDelete } = useTodos();
    const filter = todos;
  return (
    <ul>
        {filter.map((item)=>{
            return (
                <li key={item.id}>
                    
                        <input type="checkbox" id={`todo-${item.task}`} checked={item.completed} onChange={()=> toggleTodoCompleted(item.id)}/>
                        <label htmlFor={`todo-${item.id}`}>{item.task}</label>
                    {
                        item.completed && (
                            <button type='button' onClick={()=> handleTodoDelete(item.id)}>Delete</button>
                        )
                    }
                </li>
            )
        })}
    </ul>
  )
}

export default ToDos;