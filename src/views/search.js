import {Text, Button, View} from 'react-native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


function SearchView({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}


export default SearchView;
