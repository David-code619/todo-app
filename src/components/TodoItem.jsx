import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useTodo } from "@/context/useTodo";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from 'react-hot-toast';

const TodoItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.completed);
  const { setTodos } = useTodo();
  

  const handleCheckedChange = (value) => {
    setChecked(value);
    toast.success(`Todo is ${value ? "completed" : "pending"}`);
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, completed: value } : t)),
    );
  };
  return (
    <>
      <HoverCard>
        <Card className="w-full px-3">
          <div className="flex items-center gap-4 justify-between">
            <div className="flex gap-2">
              <Checkbox
                id={todo.id}
                checked={checked}
                onCheckedChange={handleCheckedChange}
              />
              <HoverCardTrigger asChild>
                <Label htmlFor={todo.id}>{todo.title}</Label>
              </HoverCardTrigger>
              <HoverCardContent>
                <div>
                  <h1 className="font-bold mb-2 text-lg">{todo.title}</h1>
                  <p>{todo.description}</p>
                </div>
              </HoverCardContent>
            </div>
            {checked ? (
              <Badge variant="secondary">completed</Badge>
              
            ) : (
              <Badge variant="destructive">pending</Badge>
            )}
          </div>
        </Card>
      </HoverCard>
    </>
  );
};

export default TodoItem;
