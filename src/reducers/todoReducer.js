

export default function todoReducer(todos , action) {
    switch (action?.type) {
        case 'initial-todos':
            return action?.todos;
        case 'add':
            return [
                ...todos,
                {
                    id : action?.id,
                    title : action?.title,
                    status : false
                }
            ]
        case 'delete':
            
            return todos.filter( (todoItem) => {
                return action?.id != todoItem.id;
            })

        case 'toggle-status':
            return todos.map( (todoItem) =>  {
                if(action.id === todoItem.id) {
                    todoItem.status = ! todoItem.status
                }

                return todoItem;
            })
        case 'edit-title':
            return todos.map( (todoItem) =>  {
                if(action.id === todoItem.id) {
                    todoItem.title = action?.newTitle
                }

                return todoItem;
            })
        default:
            return todos;
    }
}
