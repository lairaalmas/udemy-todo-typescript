import React from "react";

import { Todo } from "../../models/todo";
import TodoItem from "../TodoItem";

//FC = function component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // The key is added here, not inside the component
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
