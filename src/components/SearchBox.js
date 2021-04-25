import React from "react";
import Text from "./Text";
import Box from "./box";
import Input from "./Input";

function SearchBox() {
  return (
    <Box>
      <Input placeholder="hello" placeholderTextColor="white" bg="red" color="white"/>
      <Text mt={20}>
        Selam
      </Text>
    </Box>
  );
}

export default SearchBox;
