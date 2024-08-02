"use client"
import { createContext, ReactNode, useContext, useState } from "react";

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext = {
    todos:Todo[];
    handleAddToDo : (task:string) => void;
}

export const todosContext= createContext<TodosContext | null>(null);

export const TodosProvider = ({children}:{children:ReactNode}) =>{
    const[todos, setTodos] = useState<Todo[]>([]);
    const handleAddToDo = (task:string) =>{
        setTodos((prev)=>{
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task,
                completed:false,
                createdAt: new Date()
            },
            ...prev
        ]
        return newTodos;
    })
       
    }
    return (
        <todosContext.Provider value={{todos, handleAddToDo}}>
            {children}
        </todosContext.Provider>
    )
}

export function useTodos(){
    const todoContextValue = useContext(todosContext);
    if(!todoContextValue){
        throw new Error("useTodos used outside of provider");
    }
    return todoContextValue;
}