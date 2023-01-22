import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import TodoElement from "../components/todo-element";
import { todosAtom } from "../state/todo";
import { EditTodoItem, TodoItem } from "../types/todo-item";
import { v4 as uuid } from "uuid";
import { findElementAndIndex } from "../utils/array-helpers";

const HomePage: FunctionComponent = () => {
    const [todoList, setTodoList] = useRecoilState(todosAtom);

    const handleAddItem = () => {
        const newItem: TodoItem = { id: uuid(), name: "", description: "", complete: false, editing: true };
        setTodoList([ ...todoList, newItem ]);
    }

    const handleDeleteItem = (deletedId: string) => {
        setTodoList(todoList.filter(({ id }) => id !== deletedId ));
    }

    const handleEditItem = (editedItem: EditTodoItem) => {
        const [item, editedItemIndex] = findElementAndIndex(todoList, "id", editedItem.id);
        editedItem.editing = false;
        setTodoList([ ...todoList.slice(0, editedItemIndex), { ...item, ...editedItem  }, ...todoList.slice(editedItemIndex  + 1)]);
    }

    return (
        <>
            <TodoListContainer>
                {todoList.map((item) => 
                    <TodoElement 
                        key={item.id} 
                        item={item}
                        onDelete={handleDeleteItem}
                        onEdit={handleEditItem}
                    /> 
                )}
            </TodoListContainer>
            <button onClick={handleAddItem}>Add Item</button>
        </>
    );
};

const TodoListContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export default HomePage;
