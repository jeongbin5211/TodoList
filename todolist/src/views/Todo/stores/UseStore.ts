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
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    countTasks: (state: TodoState) => number;
}

const useStore = create<TodoState>((set) => ({
    todos: [
        { id: 1,
          text: '평일 웹 프론트엔드',
          done: false,
        },
        { id: 2,
            text: '주말 웹 프론트엔드',
            done: false,
          },
          { id: 3,
            text: '방학',
            done: true,
          },
          { id: 4,
            text: '파이썬',
            done: true,
          }
    ],
    addTodo: (todo: Todo) => set(state => ({ todos: [...state.todos, todo]})),
    // getTodo: (id: number) => set(state => state.todos),
    toggleTodo: (id: number) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo 
        )
    })),
    removeTodo: (id: number) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    countTasks: (state) => state.todos.filter(todo => !todo.done).length,
}))

export default useStore