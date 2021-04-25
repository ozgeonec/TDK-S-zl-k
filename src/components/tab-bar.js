import React from "react";
import { View } from "react-native";

import Button from "./button";
import { Search, Bookmark, RotateCcw } from "./icons";
import Box from "./box";
import theme from "./utils/theme";

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === "Search" ? (
          <Box key={label} p={15} mt={-15} ml={0} size={76} borderRadius={999} bg="white">
            <Button
              bg="red"
              size={56}
              ml={-5}
              borderRadius={999}
              onPress={onPress}
            >
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flexDirection="column"
            size={56}
            flex={1}
            onPress={onPress}
          >
            {label === "History" && (
              <RotateCcw
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === "Favorite" && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={6}
              bg={isFocused ? "red" : "white"}
              mt={1}
              borderRadius={999}
            />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
