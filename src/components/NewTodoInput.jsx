import { useState } from "react";

export default function NewTodoInput({ addTodo }) {
    const [ newTodoTitle , setNewTodoTitle ] = useState("");

    const onInputNewTodoChangeHandler = (event) => {
        setNewTodoTitle(event.target.value)
    }


    const addNewTodoHandler = (event) => {
        if( event.key === 'Enter' && newTodoTitle !== "") {
            addTodo(newTodoTitle);
            setNewTodoTitle("");
        }
    }

    return (
        <div className="relative">
            <input type="text" placeholder="What needs to be done today?"
                onChange={onInputNewTodoChangeHandler}
                onKeyDown={addNewTodoHandler}
                value={newTodoTitle}
                className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
        </div>
    )
}
