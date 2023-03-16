import React, { useContext } from "react";

import TodoItem from "../TodoItem";

import TodosContext from "../../store/todos-context";

import classes from "./Todos.module.css";

//FC = function component
const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todo}>
      {ctx.items.map((item) => (
        // The key is added here, not inside the component
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
