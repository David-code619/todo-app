import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Loader2 } from "lucide-react";
import { useTodo } from "@/context/useTodo";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const todoSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Todo must be at least 3 characters long" })
    .max(50, { message: "Todo is too long" }),
  description: z
    .string()
    .max(200, { message: "Description is too long" })
    .optional(),
});

export function CreateTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { setTodos } = useTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: { title: "", description: "" },
  });

  const todoSubmitHandler = (data) => {
    setIsLoading(true);
    const newTodo = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    reset();
    setIsLoading(false);

    console.log(newTodo);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(todoSubmitHandler)}>
          <DialogHeader className="mb-4">
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Make changes to your todo here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="mb-4">
            <Field>
              <Label htmlFor="name-1">Title</Label>
              <Input
                {...register("title")}
                id="name-1"
                name="name"
                placeholder="Title"
              />
              {/*  Display the error message from Zod */}
              {errors.title && (
                <p className="text-destructive text-sm mt-1">
                  {errors.task.message}
                </p>
              )}
            </Field>
            <Field>
              <Label htmlFor="description-1">Description</Label>
              <Input
                {...register("description")}
                id="description-1"
                name="description"
                placeholder="Description"
              />
              {errors.description && (
                <p className="text-destructive text-sm mt-1">
                  {errors.task.message}
                </p>
              )}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
