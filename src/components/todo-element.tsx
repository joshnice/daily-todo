import { FunctionComponent } from "react"
import { TodoItem } from "../types/todo-item"

interface TodoElementProps {
    item: TodoItem
}

const TodoElement: FunctionComponent<TodoElementProps> = ({ item }) => {
    return <div>{ item.name }</div>
}

export default TodoElement