import create from 'zustand';

interface Todo {
    id: number;
    text: string;
    done: boolean;
    // createAt: Date;
    // updatedAt: Date;
}

interface TodoState {
    todos: Todo[],
    addTodo: (todo: Todo) => void;
    getTodo?: (id: number) => Todo | undefined;
    toggleTodo?: (id: number) => void;
    removeTodo?: (id: number) => void;
}

const useStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo: Todo) => set(state => ({ todos: [...state.todos, todo]})),
    // getTodo: (id: number) => set(state => state.todos),
    // toggleTodo,
    // removeTodo
}))

export default useStore