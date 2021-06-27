import * as React from 'react'

import Text from "./Text";

function CardSummary({ children }) {
  return (
    <Text
      fontSize={14}
    >
      {children}
    </Text>
  )
}

export default CardSummary;
