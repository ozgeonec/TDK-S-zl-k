import * as React from 'react'

import Text from "./Text";

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
