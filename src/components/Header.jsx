import React from "react";
import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 py-4 bg-amber-500 text-white border-b-2 border-blue-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.3)]">
        <ClipboardDocumentListIcon className="h-8 w-8 text-white" />
        <h1 className="text-2xl">Todo App</h1>
      </div>
    </>
  );
};

export default Header;
