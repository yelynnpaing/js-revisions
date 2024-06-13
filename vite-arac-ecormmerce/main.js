
import { createCartItem } from './src/app/cart.js';
import { createProduct } from './src/app/product.js';
import Shop from './src/js/Shop.js';
import { products } from './src/js/data.js';
import './style.css'
import 'flowbite';

const shop = new Shop;
shop.init();

console.log(createCartItem(products[1]));