import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Allows for connection to the redux store
import {connect} from 'react-redux';

import ProductTile from '../components/productTile/productTile';

// basic styles for the cart screen
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class CartScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Cart Screen',
  };

  // creates the tiles on this screen to allow the user to add them to the cart
  createTiles = (cart, removeItemFromCart) => (
    Object.keys(cart).map(key => (
      <View style={{margin: 10}} key={cart[key].name}>
        {
          cart[key].quantity > 0 ? (
            <ProductTile
              product={cart[key]}
              showQuantity
              onPress={removeItemFromCart}
              action="Remove"
            />
          ) : null
        }
      </View>
    )));

  // calculates the totals for the entire cart
  getTotal = (cart) => {

    let total = 0.00;
    const cartKeys = Object.keys(cart);

    for (let i = 0; i < cartKeys.length; i += 1) {
      total += (cart[cartKeys[i]].price * cart[cartKeys[i]].quantity);
    }

    return total.toFixed(2);
  };

  // creates the tiles if the quantity for the current product is higher than 0
  render = () => {
    const {Cart, removeItemFromCart} = this.props;
    return (
      <View style={styles.container}>
        {this.createTiles(Cart, removeItemFromCart)}
        {
            this.getTotal(Cart) > 0 ? (
              <View style={{flexDirection: 'row'}}>
                <Text>Grand Total: $</Text>
                <Text>
                  {this.getTotal(Cart)}
                </Text>
              </View>
            ) : null
        }
      </View>
    );
  }
}

// maps the state of the cart store to the props
const mapStateToProps = state => ({
  Cart: state,
});

// maps the actions to the props
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: product => dispatch({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: {
      [product.name]: Object.assign({}, product, {quantity: product.quantity - 1}),
    },
  }),
});

// the connect syntax is what connects the component to the store
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
