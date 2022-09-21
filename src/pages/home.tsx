import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import TodoElement from "../components/todo-element";
import { todosAtom } from "../state/todo";
import { TodoItem } from "../types/todo-item";
import { v4 as uuid } from "uuid";

const HomePage: FunctionComponent = () => {
    const [todoList, setTodoList] = useRecoilState(todosAtom);

    const handleAddItem = () => {
        const newItem: TodoItem = { id: uuid(), name: "Hello World", description: "" };
        setTodoList([ ...todoList, newItem ]);
    }

    return (
        <>
            <TodoListContainer>
                {todoList.map((item) => 
                    <TodoElement key={item.id} item={item} /> 
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
