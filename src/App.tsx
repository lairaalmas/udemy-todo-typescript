import "./App.css";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
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

  return (
    <main>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} removeTodo={onRemoveTodoHandler} />
    </main>
  );
}

export default App;
