import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <>
      <div className="border border-black mx-4 md:mx-24 rounded-lg bg-pink-50 mt-4 p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="task" className="text-xl mb-1">
              Task:
            </label>
            <input
              id="task"
              type="text"
              placeholder="Enter you task"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-lg border border-black px-4 py-2 my-4 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
