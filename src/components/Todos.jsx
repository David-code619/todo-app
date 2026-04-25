import TodoList from "./TodoList";
import { CreateTodo } from '@/components/CreateTodo'


const Todos = () => {
  return (
    <div className="w-full max-w-xl flex flex-col gap-10">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl">Tasks</h1>
        <CreateTodo />
        </div>
        <TodoList />
    </div>
  )
}       

export default Todos