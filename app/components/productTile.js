import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

// Create a generic stylesheet for testing
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ProductTile extends React.Component {
  createTile = (product) => {
    const { onPress } = this.props;
    return (
      <Button
        onPress={() => onPress(product)}
        title={`${product.name} - ${product.price.toFixed(2)}`}
      />
    );
  };

  render = () => {
    const { product } = this.props;
    return (
      <View style={styles.container}>
        {this.createTile(product)}
      </View>
    );
  }
}


export default ProductTile;
