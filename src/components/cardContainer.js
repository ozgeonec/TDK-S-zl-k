import * as React from "react";

import Box from "./box";

function CardContainer({ children }) {
  return (
    <Box bg="white" borderRadius="normal" py={16} px={12} mb={10}>
      <Box borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Box>
  );
}

export default CardContainer;
