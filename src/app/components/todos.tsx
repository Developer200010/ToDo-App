"use client"
import React from 'react'
import { useTodos } from '../store/todos';
import { useSearchParams } from 'next/navigation';

const ToDos = () => {
    const{todos, toggleTodoCompleted, handleTodoDelete } = useTodos();
    const search = useSearchParams();
    const todoFilter = search.get("todos");
    let filterTodo = todos;

    if(todoFilter === 'active'){
        filterTodo = filterTodo.filter((todo)=> !todo.completed);
    }else if(todoFilter === 'completed'){
        filterTodo = filterTodo.filter((todo)=> todo.completed)
    }

  return (
    <ul>
        {filterTodo.map((item)=>{
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