import { StatusBar, Text } from "react-native";
import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from "../components/box";

function HistoryView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    },[]));

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Arama Geçmişi</Text>
    </Box>
  );
}
export default HistoryView;
