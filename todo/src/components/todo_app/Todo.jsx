import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Category from "../category/Category";

export default function Todo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const addTodos = (newTodos) => {
    const currId = todos[todos.length - 1]?.id + 1 || 1;
    newTodos.id = currId;
    setTodos((prevTodos) => {
      return [...prevTodos, newTodos];
    });
  };
  const clearSelectedTodos = () => {
    const newTodos = [];
    todos.forEach((todo) => {
      if (!todo.isSelected) {
        newTodos.push(todo);
      }
    });
    setTodos(newTodos);
  };
  const updateIsCompleted = (todoId, completed) => {
    const currentTodos = [...todos];
    currentTodos.forEach((t, i) => {
      if (t.id === todoId) {
        currentTodos[i].isCompleted = completed;
      }
    });
    setTodos(currentTodos);
  };
  const updateIsSelected = (todoId, selected) => {
    const currentTodos = [...todos];
    currentTodos.forEach((t, i) => {
      if (t.id === todoId) {
        currentTodos[i].isSelected = selected;
      }
    });
    setTodos(currentTodos);
  };

  const clearAllTodos = () => {
    setTodos([]);
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className=" p-2 text-center">
      <h2 className=" font-bold text-3xl mb-5">Todo app</h2>
      <Header
        addTodo={addTodos}
        clearAllTodo={clearAllTodos}
        clearSelectedTodo={clearSelectedTodos}
      />
      <Category
        categoryName={"Not Completed"}
        todos={todos.filter(
          (t) =>
            !t.isCompleted &&
            new Date().toISOString() <= new Date(t.dueDate).toISOString()
        )}
        updateIsCompleted={updateIsCompleted}
        updateIsSelected={updateIsSelected}
      />
      <Category
        categoryName={"Over Due"}
        todos={todos.filter(
          (t) =>
            new Date().toISOString() > new Date(t.dueDate).toISOString() &&
            !t.isCompleted
        )}
        updateIsCompleted={updateIsCompleted}
        updateIsSelected={updateIsSelected}
      />
      <Category
        categoryName={"Completed"}
        todos={todos.filter((t) => t.isCompleted)}
        updateIsCompleted={updateIsCompleted}
        updateIsSelected={updateIsSelected}
      />
    </div>
  );
}
