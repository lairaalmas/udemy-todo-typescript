import React from "react";

import { Todo } from "../../models/todo";
import TodoItem from "../TodoItem";

import classes from "./Todos.module.css";

//FC = function component
const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todo}>
      {props.items.map((item) => (
        // The key is added here, not inside the component
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
