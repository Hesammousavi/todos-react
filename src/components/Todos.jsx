import { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import NewTodoInput from "./NewTodoInput";
import { toast } from "react-toastify";
import todoReducer from "../reducers/todoReducer";
import { TodosContext } from "../contexts/TodoContext";

export default function Todos() {
    const [ todos , todoDispatcher] = useReducer( todoReducer , [])

    const addNewTodoHandler = async (todoTitle) => {
        try {
            let res = await fetch("https://65dc35f03ea883a15292b73a.mockapi.io/todos" , {
                method: 'post',
                headers: {'content-type':'application/json'},
                body : JSON.stringify({
                    title : todoTitle,
                    status : false,
                })
            })

            let todoData = await res.json();

            todoDispatcher({
                type : 'add',
                id : todoData?.id,
                title : todoData?.title
            })

            toast.success('todo created')
        } catch (error) {
            // handle error
            console.log(error)
        }
    }


    const getTodosFromApi = async () => {

        try {
            let res = await fetch("https://65dc35f03ea883a15292b73a.mockapi.io/todos");
            let todos = await res.json();


            if(res.ok) {
                todoDispatcher({
                    type : 'initial-todos',
                    todos
                })
            }

            // show errors
        } catch (error) {
            // show errors in template
            console.log(error);
        }

    }

    useEffect(() => {
        getTodosFromApi();
    } , [])

    useEffect( () => {
        localStorage.setItem('todos_list' , JSON.stringify(todos))
    }, [ todos ])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <NewTodoInput addTodo={addNewTodoHandler} />
                <TodosContext.Provider value={{
                    todos,
                    todoDispatcher
                }}>
                    <TodoList />
                </TodosContext.Provider>

            </div>
        </div>
    )
}
