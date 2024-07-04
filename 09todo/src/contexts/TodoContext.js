/* eslint-disable no-unused-vars */
//it will be just used to assemble all the context so that they can be imported from index.js
import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo Message",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTOdo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider