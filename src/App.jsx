import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <>
      <Header />
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
