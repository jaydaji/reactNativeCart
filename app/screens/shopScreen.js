import React from 'react';
import { View } from 'react-native';

import Products from '../data/productData';
import ProductTile from '../components/productTile';

class ShopScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Shop Screen',
  };

  // Uses the imported products and maps through them
  // to create a single tile for each product
  render = () => Products.map((item, index) => (
    <View key={index}>
      <ProductTile product={item} />
    </View>
  ));
}

export default ShopScreen;
