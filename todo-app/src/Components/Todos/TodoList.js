import React from "react";
import TodoItem from "../Todo/TodoItem";

const TodoList = (props) => {
  let filteredTodos = [];
  if (props.filterValue === "all") {
    filteredTodos = props.todos;
  }

  if (props.filterValue === "active") {
    filteredTodos = []
    filteredTodos = props.todos.filter((todo) => !todo.isComplete);
  }

  if (props.filterValue === "complete") {
    filteredTodos = []
    filteredTodos = props.todos.filter((todo) => todo.isComplete);
  }

  return filteredTodos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      todoIndex={todo.id}
      onCompleteTodo={props.onCompleteTodo}
      onDeleteTodo={props.onDeleteTodo}
    />
  ));
};

export default TodoList;
