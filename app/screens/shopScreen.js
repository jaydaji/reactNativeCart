import React from 'react';
import { View, Text } from 'react-native';

class ShopScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Shop Screen',
    headerRight: (<Text>cart</Text>),
    headerMode: 'none',
  };

  // Uses the imported products and maps through them
  // to create a single tile for each product
  render = () => (
    <View>
      <Text>Hi</Text>
    </View>
  )
}

export default ShopScreen;
