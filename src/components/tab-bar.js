import React from 'react';
import {View, Text} from 'react-native';

import Button from './button';
import {Search, Bookmark, RotateCcw} from './icons';
import Box from './box';

function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box pd={15} mt={15} borderRadius={9999} bg="white">
            <Button
              key={label}
              bg="red"
              borderRadius={999999}
              size={20}
              flex={1}
              onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            flex={1}
            onPress={onPress}>
            {label === 'History' && <RotateCcw />}
            {label === 'Favorite' && <Bookmark />}
            <Box size={3} bg={isFocused ? 'red' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}
export default TabBar;
