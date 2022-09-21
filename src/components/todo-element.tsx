import { FunctionComponent } from "react"
import { TodoItem } from "../types/todo-item"

interface TodoElementProps {
    item: TodoItem;
    onDelete: (id: string) => void;
    onEdit: (updatedItem: TodoItem) => void;
}

const TodoElement: FunctionComponent<TodoElementProps> = ({ item, onDelete }) => {
    return (
        <div>
            { item.name }
            <button onClick={() => onDelete(item.id)}>Delete {item.name}</button>
        </div>
    )
}

export default TodoElement