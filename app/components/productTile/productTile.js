import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

// basic styles for the tiles to be created
const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 8,
  },
  priceRow: {
    flexDirection: 'row',
  },
});

// product tile component to be displayed
class ProductTile extends React.Component {

  createTile = (product) => {
    const {onPress, action, showQuantity} = this.props;
    return (
      <View style={styles.item}>
        {this.getProductName(product)}
        {this.getProductPrice(product)}
        {showQuantity ? (
          <View>
            {this.getProductQuantity(product)}
            {this.getProductTotal(product)}
          </View>
        ) : null}
        <Button
          onPress={() => onPress(product)}
          title={action}
        />
      </View>
    );
  };

  // returns a view with the product name
  getProductName = product => (
    <View>
      <Text>
        {product.name}
      </Text>
    </View>
  );

  // returns a view with the product price
  getProductPrice = product => (
    <View style={styles.priceRow}>
      <Text>Price: $ </Text>
      <Text>
        {product.price.toFixed(2)}
      </Text>
    </View>
  );

  // returns a view with the product quantity currently in the cart
  getProductQuantity = product => (
    <View style={styles.priceRow}>
      <Text>Quantity: </Text>
      <Text>
        {product.quantity}
      </Text>
    </View>
  );

  // returns a view with the product total price for the quantity currently in the cart
  getProductTotal = product => (
    <View style={styles.priceRow}>
      <Text>Total: $ </Text>
      <Text>
        {(product.price * product.quantity).toFixed(2)}
      </Text>
    </View>
  );

  // return the product tile
  render = () => {
    const {product} = this.props;
    return (
      this.createTile(product)
    );
  }
}


export default ProductTile;
