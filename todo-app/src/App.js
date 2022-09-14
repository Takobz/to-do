import React, { useState } from "react";
import "./App.css";
import NewTodoForm from "./Components/NewTodo/TodoForm";
import { VStack, Heading } from "@chakra-ui/react";
import TodoList from "./Components/Todos/TodoList";
import TodoListFilterIndicator from "./Components/Todos/TodoListFilterIndicator";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const handleTodoAdd = (description) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { description: description, isComplete: false }];
    });
  };

  const handleMakeTodoComplete = (index) => {
    setTodos((prevTodos) => {
      let newTodos = [...prevTodos];
      newTodos[index].isComplete = true;
      return newTodos;
    });
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => {
      let newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const handleMarkAllCheck = (event) => {
    if (event.target.checked) {
      setTodos((prevTodos) => {
        let newTodos = prevTodos.map((todo) => {
          todo.isComplete = true;
          return todo;
        });
        return newTodos;
      });
    }
    if (!event.target.checked) {
      setTodos((prevTodos) => {
        let newTodos = prevTodos.map((todo) => {
          todo.isComplete = false;
          return todo;
        });
        return newTodos;
      });
    }
  };

  const handleFilterRadioSelect = (event) => {
    if (event.target.checked) {
      setFilterValue(event.target.value);
      console.log(filterValue);
    }
  };

  return (
    <div>
      <VStack>
        <Heading>Todo Application</Heading>
        <NewTodoForm
          onTodoAddition={handleTodoAdd}
          onCheckboxChange={handleMarkAllCheck}
        />
        <TodoListFilterIndicator
          onFilterRadioSelect={handleFilterRadioSelect}
        />
        <TodoList
          todos={todos}
          filterValue={filterValue}
          onCompleteTodo={handleMakeTodoComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </VStack>
    </div>
  );
}

export default App;
