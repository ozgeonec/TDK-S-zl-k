import React from "react";
import Text from "./Text";
import Box from "./box";
import Input from "./Input";

function SearchBox() {
  return (
    <Box>
      <Input bg="white" color="white" placeholder="hello" placeholderTextColor="atasozleriDark"/>
      <Text mt={20}>
        Selam
      </Text>
    </Box>
  );
}

export default SearchBox;
