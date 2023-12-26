import React from "react";
import moment from "moment";
export default function TodoContainer({
  id,
  taskName,
  dueDate,
  isCompleted,
  isSelected,
  updateIsCompleted,
  updateIsSelected,
}) {
  return (
    <div className=" p-2 grid grid-cols-6 bg-orange-300 rounded-xl">
      <div>
        <input
          type="checkbox"
          data-cy="isSelected"
          checked={isSelected}
          onChange={(e) => {
            updateIsSelected(id, !isSelected);
          }}
        />
      </div>
      <h3>{id}</h3>
      <h3
        className={` font-bold ${isCompleted ? "line-through" : ""}`}
        data-cy="task"
      >
        {taskName}
      </h3>
      <h4>{moment(dueDate).fromNow()}</h4>
      <div>
        <input
          type="checkbox"
          data-cy="isCompleted"
          checked={isCompleted}
          onChange={(e) => {
            updateIsCompleted(id, !isCompleted);
          }}
        />
      </div>
    </div>
  );
}
