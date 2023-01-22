import { FunctionComponent, KeyboardEvent, useRef, useState } from "react";
import { EditTodoItem, TodoItem } from "../types/todo-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from "../style/icon-button";
import styled from "styled-components";
import Tickbox from "./tickbox";

interface TodoElementProps {
    item: TodoItem;
    onDelete: (id: string) => void;
    onEdit: (updatedItem: EditTodoItem) => void;
}

const TodoElement: FunctionComponent<TodoElementProps> = ({ item, onDelete, onEdit }) => {

    const [name, setName] = useState(item.name);

    const handleNameInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && name.length > 0) {
            onEdit({...item, name, editing: false })
        }
    }

    const editItem = (editing: boolean) => {
        onEdit({...item, editing: editing})
    }

    return (
        <TodoElementContainer>
            <Tickbox 
                checked={item.complete} 
                onClick={() => onEdit({ id: item.id, complete: !item.complete })} 
            />
            {item.editing ? <input type="text" autoFocus onKeyDown={handleNameInputKeyPress} value={name} onChange={(event) => setName(event.target.value)}/> : <div onDoubleClick={() => editItem(true)}>{ item.name }</div>}
            <IconButton onClick={() => onDelete(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </IconButton>
            <IconButton onClick={() => item.editing ? onEdit({ ...item, name, editing: false }) : editItem(false)}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
        </TodoElementContainer>
    )
}

const TodoElementContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export default TodoElement