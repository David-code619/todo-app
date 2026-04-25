import { useState } from "react";
import { TodoContext } from "./todoContextConfig";

const TODOS = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs, Butter",
    completed: false,
  },
];

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(TODOS);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};


