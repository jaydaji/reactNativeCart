import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

// Allows for connection to the redux store
import { connect } from 'react-redux';

// allows the react navigation to work correctly with the
// component when mapping actions to the props
import { withNavigation } from 'react-navigation';

// basic styles for the cart button
const styles = StyleSheet.create({
  generic: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

// gets the quantity to display in the cart button shown up the top right
const getCartQuantity = (cart) => {
  let total = 0;
  const cartKeys = Object.keys(cart);
  for (let i = 0; i < cartKeys.length; ++i) {
    total += cart[cartKeys[i]].quantity;
  }
  return 'View Cart: ' + total.toString();
};

// cartbutton component shown in the header
const CartButton = (props) => {
  const { Cart, navigation } = props;

  // return the component
  return (
    <View style={styles.generic}>
      <Button
        title={getCartQuantity(Cart)}
        style={styles.generic}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

// maps the state of the cart store to the props
const mapStateToProps = state => ({
  Cart: state,
});

// the connect syntax is what connects the component to the store
export default connect(mapStateToProps)(withNavigation(CartButton));
