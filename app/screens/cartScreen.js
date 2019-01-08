import React from 'react';
import { View, Text } from 'react-native';

class CartScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Cart Screen',
  };

  render = () => (
    <View>
      <Text>
        Cart Screen
      </Text>
    </View>
  )
}

export default CartScreen;
