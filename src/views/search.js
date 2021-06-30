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
import SimpleCard from "../components/simpleCard";

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

function SearchView({ navigation }) {

  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [heroHeightAnim] = useState(new Animated.Value(285));
  const [bgOpacity] = useState(new Animated.Value(1));

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 320,
        useNativeDriver: false,
      }).start();
      Animated.timing(heroHeightAnim, {
        toValue: 124,
        duration: 320,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 320,
        useNativeDriver: false,
      }).start();
      Animated.timing(heroHeightAnim, {
        toValue: 285,
        duration: 320,
        useNativeDriver: false,
      }).start();
    }
  }, [heroHeightAnim, isSearchFocus, bgOpacity]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content");
    }, [isSearchFocus]),
  );

  return (
    <Box flex={1}>
      <Box as={Animated.View} position="relative" zIndex={1} height={heroHeightAnim}>

        <Box as={Animated.View} opacity={bgOpacity} mt={-60}>
          <Background>
            <Box pt={60} flex={1}
                 alignItems="center"
                 justifyContent="center">
              <Logo color="white" width={120} />
            </Box>
          </Background>
        </Box>

        <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
          <SearchBox onChangeFocus={status => setSearchFocus(status)} />
        </Box>

      </Box>

      <Box flex={1} bg="softGrey" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <FlatList
              keyExtractor={item => item.title}
              data={DATA}
              renderItem={({ item }) => (
                <SimpleCard>
                  {item.title}
                </SimpleCard>
              )}
              ListHeaderComponent={<Text color="textLight" mb={12} > Son Aramalar </Text>}
            />
          </Box>) : (
          <Box p={30} flex={1}>
            <CardContainer onPress={() => navigation.navigate("Detail", {title: "on para"})}>
              <Card>
                on para
              </Card>
              <CardSummary>
                çok az (para).
              </CardSummary>
            </CardContainer>

            {/*<FlatList*/}
            {/*  data={DATA}*/}
            {/*  renderItem={({ item }) => (*/}
            {/*    <CardContainer>*/}
            {/*      <Card>*/}
            {/*        {item.title}*/}
            {/*      </Card>*/}
            {/*      <CardSummary>*/}
            {/*        {item.summary}*/}
            {/*      </CardSummary>*/}
            {/*    </CardContainer>*/}
            {/*  )}*/}
            {/*  keyExtractor={item => item.title}*/}
            {/*/>*/}
          </Box>)}
      </Box>
    </Box>
  );
}

export default SearchView;
