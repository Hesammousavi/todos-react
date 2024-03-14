import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodosContext } from "../contexts/TodoContext";


export default function TodoList() {
    const { todos } = useContext(TodosContext);

    return (
        <ul className="list-reset">
            { todos.map( (todo, index) => <TodoListItem key={index} todo={todo} />) }
        </ul>
    )
}
