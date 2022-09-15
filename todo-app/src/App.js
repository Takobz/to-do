import React, { useState, useEffect } from "react";
import "./App.css";
import NewTodoForm from "./Components/NewTodo/TodoForm";
import { VStack, Heading } from "@chakra-ui/react";
import TodoList from "./Components/Todos/TodoList";
import TodoListFilterIndicator from "./Components/Todos/TodoListFilterIndicator";
import {
  getAllToDoItems,
  addToDoItem,
  setToDoToComplete,
  deletToDoToComplete,
  setAllToDoItemsToComplete,
  setAllToDoItemsToActive
} from "./Services/ToDoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  //get all todos from db when we 1st load app.
  useEffect(() => {
    getAllToDoItems().then((items) => {
      setTodos(items);
    });
  }, []);

  const handleTodoAdd = (description) => {
    addToDoItem(description).then(() => {
      getAllToDoItems().then((items) => {
        setTodos(items);
      });
    });
  };

  const handleMakeTodoComplete = (id) => {
    setToDoToComplete(id).then(() => {
      getAllToDoItems().then((items) => {
        setTodos(items);
      });
    });
  };

  const handleDeleteTodo = (id) => {
    deletToDoToComplete(id).then(() => {
      getAllToDoItems().then((items) => {
        setTodos(items);
      });
    });
  };

  const handleMarkAllCheck = (event) => {
    if (event.target.checked) {
      setAllToDoItemsToComplete().then(() => {
        getAllToDoItems().then((items) => {
          setTodos(items);
        });
      });
    }
    if (!event.target.checked) {
      setAllToDoItemsToActive().then(() => {
        getAllToDoItems().then((items) => {
          setTodos(items);
        });
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
