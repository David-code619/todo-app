import TodoItem from "./TodoItem";
import { useTodo } from '@/context/useTodo'



const TodoList = () => {
  const {todos} = useTodo()

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm">Your Todos</h1>
      </div>

      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
