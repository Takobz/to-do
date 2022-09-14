import { HStack, RadioGroup, Radio } from "@chakra-ui/react";
import React from "react";

const TodoListFilterIndicator = (props) => {

  return(<>
   <RadioGroup>
    <HStack>
        <Radio onChange={props.onFilterRadioSelect} value="all">
            All
        </Radio>
        <Radio onChange={props.onFilterRadioSelect} value="active">
            Active
        </Radio>
        <Radio onChange={props.onFilterRadioSelect} value="complete">
            Complete
        </Radio>
    </HStack>
   </RadioGroup>
  </>)
};

export default TodoListFilterIndicator;
