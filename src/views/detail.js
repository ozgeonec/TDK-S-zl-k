import { SafeAreaView, StatusBar, Text } from "react-native";
import * as React from 'react';
import { useFocusEffect } from "@react-navigation/native";
import Box from "../components/box";

function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    },[]));

  return (
    <Box as={SafeAreaView} flex={1} p={16} bg="softGrey">
      <Text>Details</Text>
    </Box>
  );
}
export default DetailView;
