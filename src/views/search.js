import { StatusBar, Animated, FlatList } from "react-native";
import * as React from "react";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import Box from "../components/box";
import Text from "../components/Text";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import Background from "../components/background";
import Card from "../components/card";
import CardSummary from "../components/cardSummary";
import CardContainer from "../components/cardContainer";

const DATA = [
  {
    title: "First Item",
    summary: "First Summary",
  },
  {
    title: "Second Item",
    summary: "Second Summary",
  },
  {
    title: "Third Item",
    summary: "Third Summary",
  },
  {
    title: "First Item",
    summary: "First Summary",
  },
  {
    title: "Second Item",
    summary: "Second Summary",
  },
  {
    title: "Third Item",
    summary: "Third Summary",
  },
];

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
          <Background>
            <Box flex={1}
                 alignItems="center"
                 justifyContent="center">
              <Logo color="white" width={120} />
            </Box>
          </Background>
        )}


        <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
          <SearchBox onChangeFocus={status => setSearchFocus(status)} />
        </Box>

      </Box>

      <Box flex={1} bg="softGrey" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>
              History
            </Text>
          </Box>) : (
          <Box p={30} flex={1}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <CardContainer>
                  <Card>
                    {item.title}
                  </Card>
                  <CardSummary>
                    {item.summary}
                  </CardSummary>
                </CardContainer>
              )}
              keyExtractor={item => item.title}
            />
          </Box>)}
      </Box>
    </Box>
  );
}

export default SearchView;
