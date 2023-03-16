import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  // will eventaually be connected to HTMLInputElement (interface)
  // but has no initial value (null)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />

      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
