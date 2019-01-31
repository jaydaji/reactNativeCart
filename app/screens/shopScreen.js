import React from 'react';
import { StyleSheet, View } from 'react-native';

// Allows for connection to the redux store
import { connect } from 'react-redux';

import ProductTile from '../components/productTile/productTile';

// Create a generic stylesheet for testing
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ShopScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Shop Screen',
  };

  // creates the tiles on this screen to allow the user to add them to the cart
  createTiles = (cart, addItemToCart) => (
    Object.keys(cart).map(key => (
      <View style={{ margin: 10 }} key={cart[key].name}>
        <ProductTile
          product={cart[key]}
          showQuantity={false}
          onPress={addItemToCart}
          action="Add to Cart"
        />
      </View>
    )));

  // Uses the imported products and maps through them
  // to create a single tile for each product
  render = () => {
    const { Cart, addItemToCart } = this.props;
    return (
      <View style={styles.container}>
        {this.createTiles(Cart, addItemToCart)}
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
  addItemToCart: product => dispatch({
    type: 'ADD_ITEM_TO_CART',
    payload: {
      [product.name]: Object.assign({}, product, { quantity: product.quantity + 1 }),
    },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
