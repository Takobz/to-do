import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

const TodoOptions = (props) => {
  return (
    <HStack>
      <IconButton
        aria-label="check"
        onClick={() => props.onCompleteTodo(props.todoIndex)}
        icon={<CheckIcon />}
      />
      {props.isTodoComplete && (
        <IconButton
          aria-label="delete"
          onClick={() => props.onDeleteTodo(props.todoIndex)}
          icon={<DeleteIcon />}
        />
      )}
    </HStack>
  );
};

export default TodoOptions;
