import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Screens
import ShopScreen from './screens/shopScreen';
import CartScreen from './screens/cartScreen';

import CartButton from './components/cartButton';


// Create the navigation
const AppNavigator = createStackNavigator(
  {
    Shop: ShopScreen,
    Cart: CartScreen,
  }, {
    navigationOptions: {
      headerTitle: 'ezyVet Shop',
      headerRight: (
        <CartButton />
      ),
    },
  },
);

export default class Shop extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
