import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleAdd(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="x-64 px-2 rounded-sm bg-stone-200"
        onChange={handleAdd}
        value={task}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
