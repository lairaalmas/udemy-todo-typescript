import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];

  return (
    <main>
      <Todos items={todos} />
    </main>
  );
}

export default App;
