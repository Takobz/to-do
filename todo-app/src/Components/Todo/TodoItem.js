import React from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Spacer,
  Flex
} from "@chakra-ui/react";
import TodoOptions from "./TodoOptions";

const TodoItem = (props) => {
  return (
    <Flex gap='2' w="50%" bg="#B0B0B0" borderRadius="lg">
      <Editable defaultValue={props.todo.description}>
        {props.todo.isComplete ? (
          <EditablePreview as="s" />
        ) : (
          <EditablePreview />
        )}
        <EditableInput />
      </Editable>
      <Spacer />
      <TodoOptions gap='2'
        todoIndex={props.todoIndex}
        isTodoComplete={props.todo.isComplete}
        onCompleteTodo={props.onCompleteTodo}
        onDeleteTodo={props.onDeleteTodo}
      />
    </Flex>
  );
};

export default TodoItem;
