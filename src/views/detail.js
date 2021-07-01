import { SafeAreaView, StatusBar } from "react-native";
import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../components/box";
import Text from "../components/Text";
import ActionButton from "../components/action-button";
import More from "../components/icons/More";

function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, []));

  return (
    <Box as={SafeAreaView}  p={16} bg="softGrey">
      <Box>
        <Text fontSize={32} fontWeight="bold" pl={16}>Details</Text>
        <Text fontSize={18} fontStyle="italic" color="textLight" pl={16} mt={6}>Details</Text>
      </Box>
      <Box>
        <ActionButton mr={250}>
          <More/>
          <Text color="textLight">Türk İşaret Dili</Text>
        </ActionButton>
        <ActionButton mr={360}>
          <More />
        </ActionButton>
      </Box>
    </Box>
  );
}

export default DetailView;
