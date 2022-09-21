export interface TodoItem {
    id: string;
    name: string;
    description: string;
    complete: boolean;
}

export type EditTodoItem = Partial<TodoItem>;