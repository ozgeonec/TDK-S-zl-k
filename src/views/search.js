import { ImageBackground, StatusBar, Animated } from "react-native";
import * as React from "react";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import Box from "../components/box";
import bg from "../assets/bg.jpeg";
import Text from "../components/Text";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";


function SearchView() {

  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [heroHeightAnim] = useState(new Animated.Value(285));

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeightAnim, {
        toValue: 124,
        duration: 320,
      }).start();
    } else {
      Animated.timing(heroHeightAnim, {
        toValue: 285,
        duration: 320,
      }).start();
    }
  }, [heroHeightAnim, isSearchFocus]);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
    }, [isSearchFocus]),
  );

  return (
    <Box flex={1}>
      <Box as={Animated.View} position="relative" zIndex={1} height={heroHeightAnim}>

        {!isSearchFocus && (
          <Box as={ImageBackground}
               source={bg}
               style={{ width: "100%", height: "100%" }}
          >
            <Box flex={1}
                 alignItems="center"
                 justifyContent="center">
              <Logo color="white" width={120} />
            </Box>
          </Box>)}


        <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
          <SearchBox onChangeFocus={status => setSearchFocus(status)} />
        </Box>

      </Box>

      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>
              History
            </Text>
          </Box>) : (
          <Box p={30} flex={1}>
            <Text>
              Öneri
            </Text>
          </Box>)}
      </Box>
    </Box>
  );
}

export default SearchView;
