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

  console.log(filteredTodos)
  return filteredTodos.map((todo, index) => (
    <TodoItem
      todo={todo}
      key={index}
      todoIndex={index}
      onCompleteTodo={props.onCompleteTodo}
      onDeleteTodo={props.onDeleteTodo}
    />
  ));
};

export default TodoList;
