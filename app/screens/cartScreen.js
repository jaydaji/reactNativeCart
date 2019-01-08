import React from 'react';
import { View } from 'react-native';

// Allows for connection to the redux store
import { connect } from 'react-redux';

import ProductTile from '../components/productTile';

class CartScreen extends React.Component {
  // Navigation options for this particular screen
  static navigationOptions = {
    title: 'Cart Screen',
  };

  render = () => {
    const { Cart } = this.props;
    return (
      Cart.map((item, index) => (
        <View key={index}>
          <ProductTile
            product={item}
          />
        </View>
      ))
    );
  }
}

const mapStateToProps = state => ({
  Cart: state,
});

// the connect syntax is what connects the component to the store
export default connect(mapStateToProps)(CartScreen);
