import { Button } from "react-native";
import * as React from "react";
import BoxCenter from "../components/box-center";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";


function SearchView({ navigation }) {
  return (
    <BoxCenter bg="atasozleriLight" >
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
      <Logo color="red" />
      <SearchBox/>
    </BoxCenter>
  );
}

export default SearchView;
