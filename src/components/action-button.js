import React from "react";

import Button from "./button";
import Box from "./box";


function ActionButton({ children, ...props }) {
  return (
    <Button
      minWidth="actionButton"
      height="actionButton"
      bg="white"
      borderRadius="full"
      px={8}
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20}}
      {...props}
    >
        {children}
    </Button>
  );
}

export default ActionButton;
