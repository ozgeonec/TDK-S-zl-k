import {Button} from 'react-native';
import * as React from 'react';
import Box from '../components/box';
import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="blue" mt={20} />
    </BoxCenter>
  );
}

export default SearchView;
