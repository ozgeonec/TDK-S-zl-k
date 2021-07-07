
import React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import CardContainer from "./cardContainer";
import CardTitle from "./cardTitle";
import Text from "./Text";

function SearchHistoryList({ data }) {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box py={6}>
          <CardContainer>
            <CardTitle>{item.title}</CardTitle>
          </CardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text color="textLight" mb={10}>
          Son Aramalar
        </Text>
      }
    />
  )
}

export default SearchHistoryList;
