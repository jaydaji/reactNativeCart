import {createStore} from 'redux';

import Cart from '../reducers/cart';
import Products from '../../data/productData';

const cart = {};

// add some extra data to the store so that it is nice to reference and deal with
Products.map((item) => {
  cart[item.name] = item;
  cart[item.name].quantity = 0;
  return cart;
});

// set the initial state to the blank cart
const initialState = cart;

// create the store
const Store = createStore(Cart,
  initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
