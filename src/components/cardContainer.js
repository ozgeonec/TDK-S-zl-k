import * as React from "react";

import Box from "./box";
import Button from "./button";

function CardContainer({ children, ...props }) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} mb={40} {...props} >
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
}

export default CardContainer;
