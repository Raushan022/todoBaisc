import React, { useState } from "react";
import DeleteModal from "./deleteModal";

const TodoItem = ({ todo, deleteTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md p-4 my-2 rounded-lg border border-gray-200">
        <div className="text-lg text-gray-800">{todo}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
            Edit
          </button>
          <button
            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          onDelete={() => {
            deleteTodo();
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default TodoItem;
