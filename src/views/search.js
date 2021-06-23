import { Button, ImageBackground, StatusBar } from "react-native";
import * as React from "react";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import Box from "../components/box";
import bg from "../assets/bg.jpeg";
import Text from "../components/Text";
import { useFocusEffect } from "@react-navigation/native";


function SearchView() {

  const [isSearchFocus, setSearchFocus] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    },[]));
  return (
    <Box flex={1}>
      <StatusBar barStyle="light-content" />
      <Box position="relative" zIndex={1}>
        <Box as={ImageBackground}
             source={bg}
             style={{ width: "100%", height: 290 }}
        >
          <Box flex={1}
               alignItems="center"
               justifyContent="center">
            <Logo color="white" width={90} />
          </Box>

          <Box p={16} mb={-42} width="100%">
            <SearchBox onChangeFocus={status => setSearchFocus(status)}/>
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="white" pt={26}>
        <Text>
          hello
        </Text>
      </Box>
    </Box>
  );
}

export default SearchView;
