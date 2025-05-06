import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 my-2 rounded-lg border border-gray-200">
      <div className="text-lg text-gray-800">{todo}</div>
      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
          Edit
        </button>
        <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
