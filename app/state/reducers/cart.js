const Cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      return Object.assign({}, state, action.payload);
    }
    case 'REMOVE_ITEM_FROM_CART': {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export default Cart;
