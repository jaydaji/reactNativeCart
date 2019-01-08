import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

// Allows for connection to the redux store
import { connect } from 'react-redux';

import { withNavigation } from 'react-navigation';


const styles = StyleSheet.create({
  generic: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CartButton = (props) => {
  const { Cart, navigation } = props;
  return (
    <View style={styles.generic}>
      <Button title={`${Cart.length}`} style={styles.generic} onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const mapStateToProps = state => ({
  Cart: state,
});

// the connect syntax is what connects the component to the store
export default connect(mapStateToProps)(withNavigation(CartButton));
