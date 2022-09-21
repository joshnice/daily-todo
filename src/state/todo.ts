import { atom, RecoilState } from "recoil";
import { TodoItem } from "../types/todo-item";

export enum AtomKeyTodos {
    Todo = "Todos",
}

export const todosAtom: RecoilState<TodoItem[]> = atom({
    key: AtomKeyTodos.Todo,
    default: [] as TodoItem[],
});