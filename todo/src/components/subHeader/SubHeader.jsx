import React from "react";

export default function SubHeader() {
  return (
    <div className=" p-2 grid grid-cols-6 mt-2 bg-white rounded-lg" data-cy="sub-header">
      <div>Selected</div>
      <h2>ID</h2>
      <h2>Task</h2>
      <h2>Due in</h2>
      <h2>Completed</h2>
    </div>
  );
}
