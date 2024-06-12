import { renderCategory } from "../app/category.js";
import { renderProduct } from "../app/product.js";
import { categories, products } from "./data.js";


export const initialRender = () => {
    renderCategory(categories);
    renderProduct(products);
};