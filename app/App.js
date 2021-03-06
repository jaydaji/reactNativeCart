import React from 'react';
import {createStackNavigator} from 'react-navigation';

// Wraps the app in the redux provider to provide the store
import {Provider} from 'react-redux';

// Supplies our defined store to the provider
import Store from './state/store/store';

// Screens
import ShopScreen from './screens/shopScreen';
import CartScreen from './screens/cartScreen';
// Components
import CartButton from './components/cartButton/cartButton';

// Create the navigation
const AppNavigator = createStackNavigator(
  {
    Shop: ShopScreen,
    Cart: CartScreen,
  }, {
    navigationOptions: {
      headerTitle: 'ezyVet Shop',
      headerRight: (
        <CartButton/>
      ),
    },
  },
);

export default class Shop extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
