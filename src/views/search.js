import { Button } from "react-native";
import * as React from "react";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import Box from "../components/box";


function SearchView({ navigation }) {
  return (
    <Box bg="atasozleriLight">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
      <Box py={20}>
        <Logo color="red" width={120} />
      </Box>
      <SearchBox />
    </Box>
  );
}

export default SearchView;
