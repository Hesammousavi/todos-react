import { useContext, useState } from "react";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { TodoDispatcherContext, TodosContext } from "../contexts/TodoContext";



export default function TodoListItem({ todo }) {
    const [ editMode , setEditMode ] = useState(false);
    const user = useContext(UserContext)
    const { todoDispatcher } = useContext(TodosContext);


    const editTodoHandler = (event) => {
        if( event.key === 'Enter' ) {
            editTodoTitleHandler(todo , event.target.value);
            setEditMode(false);
        }
    }


    const deleteTodoHandler = async (todo) => {
        let res = await fetch(`https://65dc35f03ea883a15292b73a.mockapi.io/todos/${todo?.id}` , {
            method : "DELETE"
        })

        if(res.ok) {
            todoDispatcher({
                type: 'delete',
                id : todo.id
            });

            toast.success('the todo deleted!')
        }

        let message = await res.json();
        toast.error(message)
    }

    const toggleTodoStatusHandler = async (todo) => {
        let res = await fetch(`https://65dc35f03ea883a15292b73a.mockapi.io/todos/${todo.id}` , {
            method: 'put',
            headers: {'content-type':'application/json'},
            body : JSON.stringify({
                status : ! todo.status
            })
        })

        if(res.ok) {
            todoDispatcher({
                type: 'toggle-status',
                id : todo.id
            })
        }

       // TODO : show me an error
    }

    const editTodoTitleHandler = async (todo , newTitleValue ) => {
        let res = await fetch(`https://65dc35f03ea883a15292b73a.mockapi.io/todos/${todo.id}` , {
            method: 'put',
            headers: {'content-type':'application/json'},
            body : JSON.stringify({
                title : newTitleValue
            })
        })

        if( res.ok ) {
            todoDispatcher({
                type : 'edit-title',
                id : todo.id,
                newTitle : newTitleValue
            })
        }
    }


    return (
        <li className="relative dec flex items-center justify-between px-2 py-6 border-b">
            {
                editMode
                ?   <div className="w-full flex items-center">
                        <input type="text" defaultValue={todo?.title} onChange={() => {}} onKeyDown={editTodoHandler} className="w-full px-4 py-2 border border-gray-200 rounded" />
                        <DeleteIcon className="ml-2" onClick={() => setEditMode(false)}/>
                    </div>
                :  (
                    <div className="flex items-center">
                        <div>
                            <input type="checkbox" checked={todo?.status} onChange={() => toggleTodoStatusHandler(todo)} className="" />
                            <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.status ? 'line-through' : ''}`}>{ todo?.title }</p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditIcon onClick={ () => setEditMode(true) }/>
                            <DeleteIcon onClick={() => deleteTodoHandler(todo)}/>
                        </button>
                    </div>
                )
            }



        </li>
    )
}
