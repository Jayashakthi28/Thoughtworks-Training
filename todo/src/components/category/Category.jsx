import React from "react";
import TodoContainer from "../todo-container/Todo_container";
import SubHeader from "../subHeader/SubHeader";

export default function Category({
  categoryName,
  todos,
  updateIsCompleted,
  updateIsSelected,
}) {
  return (
    <div className=" flex flex-col p-2">
      <h2 className=" p-2 text-left" data-cy="category-name">
        {categoryName} :-
      </h2>
      <div
        className=" flex flex-col gap-3 bg-gray-100 p-5"
        data-cy="container"
      >
        {todos.length > 0 && <SubHeader />}
        {todos.map((todo, idx) => (
          <TodoContainer
            dueDate={todo.dueDate}
            id={todo.id}
            isCompleted={todo.isCompleted}
            taskName={todo.taskName}
            updateIsCompleted={updateIsCompleted}
            isSelected={todo.isSelected}
            updateIsSelected={updateIsSelected}
            key={idx}
          />
        ))}
        {todos.length === 0 && "Nothing to show"}
      </div>
    </div>
  );
}
