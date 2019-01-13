import React from 'react';
import {
  View, Button, Text, StyleSheet,
} from 'react-native';

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
    const { onPress, action, showQuantity } = this.props;
    return (
      <View style={styles.item}>
        <Text>
          {product.name}
        </Text>
        <View style={styles.priceRow}>
          <Text>
            Price: $
          </Text>
          <Text>
            {product.price.toFixed(2)}
          </Text>
        </View>
        {
          showQuantity
            ? (
              <View>
                <View style={styles.priceRow}>
                  <Text>
                    Quantity:
                  </Text>
                  <Text>
                    {product.quantity}
                  </Text>
                </View>
                <View style={styles.priceRow}>
                  <Text>
                    Total: $
                  </Text>
                  <Text>
                    {(product.price * product.quantity).toFixed(2)}
                  </Text>
                </View>
              </View>
            ) : null
        }
        <Button
          style={styles.addButton}
          onPress={() => onPress(product)}
          title={action}
        />
      </View>
    );
  };

  // return the product tile
  render = () => {
    const { product } = this.props;
    return (
      this.createTile(product)
    );
  }
}


export default ProductTile;
