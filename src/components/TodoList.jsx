import TodoListItem from "./TodoListItem";


export default function TodoList({ todos , deleteTodo , toggleTodoStatus , editTodoTitle}) {


    return (
        <ul className="list-reset">
            { todos.map( (todo, index) => <TodoListItem key={index} todo={todo} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} editTodoTitle={editTodoTitle} />) }
        </ul>
    )
}
