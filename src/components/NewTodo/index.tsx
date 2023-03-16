import React, { useRef, useContext } from "react";

import TodosContext from "../../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);

  // will eventaually be connected to HTMLInputElement (interface)
  // but has no initial value (null)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // (!. like ?.) informs to typescript that this value is 100% sure to exist
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />

      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
