import * as React from "react";

import Text from "./Text";
import Box from "./box";

function DetailSummary({ children}) {
  return (
    <Text ml={30} mt={10} fontWeight={500} color="textLight">
      {children}
    </Text>

  );
}

export default DetailSummary;
