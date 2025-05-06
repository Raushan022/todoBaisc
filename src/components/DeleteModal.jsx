import React from "react";

const DeleteModal = ({ isOpen, onClose, onDelte }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-center mb-4">
          Are you sure you want to delete?
        </h2>
        <div className="flex justify-around">
          <button
            onClick={onDelte}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
