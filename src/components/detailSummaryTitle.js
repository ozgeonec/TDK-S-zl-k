import * as React from "react";

import Text from "./Text";
import Box from "./box";

function DetailSummaryTitle({ children}) {
  return (
      <Text fontWeight={600} ml={20} mt={12}>
        {children}
      </Text>
  );
}

export default DetailSummaryTitle;
