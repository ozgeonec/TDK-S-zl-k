import * as React from 'react'

import Text from "./Text";
import Box from "./box";

function Card({ children }) {
  return (
      <Text
        fontSize={18}
        fontWeight="bold"
      >
        {children}
      </Text>
  )
}

export default Card;
