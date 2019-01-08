import React from 'react';
import { createStackNavigator } from 'react-navigation';


// Screens
import ShopScreen from './screens/shopScreen';
import CartScreen from './screens/cartScreen';


// Create the navigation
const AppNavigator = createStackNavigator(
  {
    Shop: ShopScreen,
    Cart: CartScreen,
  }, {
    navigationOptions: {
      headerTitle: 'ezyVet Shop',
    },
  },
);

export default class Shop extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
