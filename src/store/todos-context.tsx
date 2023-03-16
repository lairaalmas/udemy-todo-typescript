import React, { useState } from "react";
import { Todo } from "../models/todo";

type ITodoContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<ITodoContext>({
  // this is the code, not the interface
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => prev.concat(newTodo));
  };

  const onRemoveTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: ITodoContext = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
