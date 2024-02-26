import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import NewTodoInput from "./NewTodoInput";

export default function Todos() {
    const [ todos , setTodos ] = useState([]);

    const addNewTodoHandler = (todoTitle) => {
        setTodos([
            ...todos,
            {
                id : uuidv4(),
                title : todoTitle,
                status : false,
            }
        ])
    }

    const deleteTodoHandler = (todo) => {
        let newTodos = todos.filter( (todoItem) => {
            return todo.id != todoItem.id;
        })

        setTodos(newTodos);
    }

    const toggleTodoStatusHandler = (todo) => {
        let newTodos = todos.map( (todoItem) =>  {
            if(todo.id === todoItem.id) {
                todoItem.status = ! todoItem.status
            }

            return todoItem;
        })

        setTodos(newTodos);
    }

    const editTodoTitleHandler = (todo , newTitleValue ) => {
        let newTodos = todos.map( (todoItem) =>  {
            if(todo.id === todoItem.id) {
                todoItem.title = newTitleValue
            }

            return todoItem;
        })

        setTodos(newTodos);
    }

    useEffect(() => {
        setTodos( JSON.parse( localStorage.getItem('todos_list') ) ?? [])
    } , [])

    useEffect( () => {
        localStorage.setItem('todos_list' , JSON.stringify(todos))
    }, [ todos ])


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <NewTodoInput addTodo={addNewTodoHandler} />
                <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler} editTodoTitle={editTodoTitleHandler}/>
            </div>
        </div>
    )
}
