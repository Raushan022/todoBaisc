import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(todoIndex) {
    const nonDeletedTodos = todos.filter((_, index) => index != todoIndex);
    setTodos(nonDeletedTodos);
  }

  function editTodo() {}

  return (
    <>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
