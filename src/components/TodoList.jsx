import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="border border-black mx-4 md:mx-24 rounded-lg bg-blue-50 mt-4 p-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
