export interface TodoItem {
    id: string;
    name: string;
    description: string;
    complete: boolean;
}

export interface EditTodoItem extends Partial<TodoItem> {
    id: string;
}