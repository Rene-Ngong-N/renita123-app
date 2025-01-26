import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Renita!</Text>
      <Button title="Search for Flights" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

export default HomeScreen;