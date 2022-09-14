import React, { useState } from "react";
import { FormControl, FormLabel, Input, Center, Checkbox, Box } from "@chakra-ui/react";

const TodoForm = (props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodoAddition(value);
    setValue('');
  };

  return (
    <>
    <Center w="50%">
      <FormControl>
        <Center>
          <FormLabel>Enter Todo</FormLabel>
        </Center>
        <form onSubmit={handleSubmit}>
          <Input 
          type="text"
          placeholder="Enter Your Todo Here"
          onChange={handleInputChange}
          value={value}
          />
        </form>
      </FormControl>
      
    </Center>
    <Box>
      <Checkbox onChange={props.onCheckboxChange}>Mark All As Read</Checkbox>
    </Box>
    </>
  );
};

export default TodoForm;
