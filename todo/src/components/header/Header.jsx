import moment from "moment";
import React, { useState } from "react";

export default function Header({ addTodo, clearAllTodo, clearSelectedTodo }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(
    moment(new Date().toISOString()).format("YYYY-MM-DDTHH:MM")
  );
  const submit = () => {
    addTodo({
      taskName: task,
      dueDate: new Date(dueDate).toISOString(),
      isCompleted: false,
      isSelected: false,
    });
  };
  return (
    <div className=" p-2 grid grid-cols-5 gap-5" data-cy="header">
      <input
        type="text"
        value={task}
        data-cy="enterNewTodo"
        className=" bg-gray-50 p-2 rounded-md"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            submit();
          }
        }}
        placeholder="Enter Task"
      />
      <input
        type="datetime-local"
        value={dueDate}
        className=" bg-gray-50 p-1 rounded-md"
        onChange={(e) => {
          console.log(e.target.value);
          setDueDate(e.target.value);
        }}
        placeholder="Due Date"
      />
      <button
        className=" bg-blue-600 rounded-full px-2 text-white"
        onClick={() => {
          submit();
        }}
      >
        Add Todo +
      </button>
      <button
        className=" bg-red-500 rounded-full text-white"
        onClick={() => {
          clearSelectedTodo();
        }}
        data-cy="clearSelected"
      >
        Clear Selected
      </button>
      <button
        className=" bg-red-800 rounded-full text-white"
        onClick={() => {
          clearAllTodo();
        }}
        data-cy="clearAll"
      >
        Clear All
      </button>
    </div>
  );
}
