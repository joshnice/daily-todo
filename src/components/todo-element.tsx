import { FunctionComponent } from "react";
import { TodoItem } from "../types/todo-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from "../style/icon-button";
import styled from "styled-components";
import Tickbox from "./tickbox";

interface TodoElementProps {
    item: TodoItem;
    onDelete: (id: string) => void;
    onEdit: (updatedItem: TodoItem) => void;
}

const TodoElement: FunctionComponent<TodoElementProps> = ({ item, onDelete, onEdit }) => {
    return (
        <TodoElementContainer>
            <Tickbox 
                checked={item.complete} 
                onClick={() => onEdit({ ...item, complete: !item.complete })} 
            />
            { item.name }
            <IconButton onClick={() => onDelete(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
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