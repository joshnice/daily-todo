export interface TodoItem {
    id: string;
    name: string;
    description: string;
    complete: boolean;
    editing: boolean;
}

export interface EditTodoItem extends Partial<TodoItem> {
    id: string;
}