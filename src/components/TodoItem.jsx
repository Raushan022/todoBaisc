import React, { useState } from "react";
import DeleteModal from "./deleteModal";

const TodoItem = ({ todo, deleteTodo, updateTodo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const handleSave = () => {
    if (editedText.trim() !== "") {
      updateTodo(index, editedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedText(todo);
    setIsEditing(false);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md p-4 my-2 rounded-lg border border-gray-200">
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 mr-4 px-2 py-1 border border-gray-300 rounded-md"
          />
        ) : (
          <div className="text-lg text-gray-800 flex-1">{todo}</div>
        )}

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-3 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(true)}
              >
                Delete
              </button>
            </>
          )}
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
