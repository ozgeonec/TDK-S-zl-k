import * as React from "react";

import Text from "./Text";
import Box from "./box";

function DetailSummaryItem({ children, ...props }) {
  return (
    <Box bg="white" borderRadius="normal" py={16} mx={12}  {...props} >
      <Box flexDirection="row">
        <Text color="textLight" ml={10}>1</Text>
        <Text color="red" fontStyle="italic"> İSİM</Text>
      </Box>
    <Box>
      {children}
    </Box>
    </Box>
  );
}

export default DetailSummaryItem;
