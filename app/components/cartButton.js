import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  generic: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CartButton = () => (
  <View style={styles.generic}>
    <Text style={styles.generic}>Cart</Text>
  </View>
);

export default CartButton;
