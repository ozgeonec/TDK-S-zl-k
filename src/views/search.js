import { Button, ImageBackground, StatusBar } from "react-native";
import * as React from "react";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import Box from "../components/box";
import bg from "../assets/bg.jpeg";


function SearchView({ navigation }) {
  return (
    <Box>
      <StatusBar barStyle="light-content" />
      <Box as={ImageBackground}
           source={bg}
           style={{ width: "100%", height: 400 }}

      >
        <Box flex={1}
             alignItems="center"
             justifyContent="center">
          <Logo color="white" width={120} />
        </Box>

      </Box>

      <Box p={16} mt={-42}>
        <SearchBox />
      </Box>
    </Box>
  );
}

export default SearchView;
