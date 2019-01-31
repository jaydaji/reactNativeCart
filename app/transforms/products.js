// to be used to transform the product if necessary, currently unused
import Products from '../data/productData';

const products = {};

Products.map((item, index) => {
  products[item.name] = item;
  products[item.name].id = index;
  products[item.name].quantity = 0;
  return products;
});

export default products;
