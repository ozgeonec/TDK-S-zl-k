import * as React from "react";

import Button from "./button";
import Text from "./Text";

function SimpleCard({ children, ...props }) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} mb={12} justifyContent="flex-start" {...props} >
      <Text
        fontSize={16}
        fontWeight="bold"
      >
        {children}
      </Text>
    </Button>
  );
}

export default SimpleCard;
