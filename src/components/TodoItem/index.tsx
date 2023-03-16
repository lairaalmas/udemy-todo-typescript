import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  // id is already binded when called in Todos
  removeTodo: () => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={props.removeTodo}
      title="click to remove"
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
