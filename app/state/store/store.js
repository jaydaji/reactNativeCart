import { createStore } from 'redux';
import Cart from '../reducers/cart';

const Store = createStore(Cart);

export default Store;
