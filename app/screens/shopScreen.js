import React from 'react';
import { View } from 'react-native';

// Allows for connection to the redux store
import { connect } from 'react-redux';

import Products from '../data/productData';
import ProductTile from '../components/productTile';


class ShopScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Shop Screen',
  };

  // Uses the imported products and maps through them
  // to create a single tile for each product
  render = () => Products.map((item, index) => {
    const { addItemToCart } = this.props;
    return (
      <View key={index}>
        <ProductTile
          product={item}
          onPress={addItemToCart}
        />
      </View>
    );
  });
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: product => dispatch({ type: 'ADD_TO_CART', payload: product }),
});

export default connect(null, mapDispatchToProps)(ShopScreen);
