import React, { useState } from "react";
import List from "../List/List";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ]);

  const onToggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = { ...todo };
        newTodo.isCompleted = !newTodo.isCompleted;
        return newTodo;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <List items={todos} onChange={setTodos} Component={TodoItem} />
    </div>
  );
};
export default TodoList;
