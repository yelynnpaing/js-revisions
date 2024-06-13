import { renderCategory } from "../app/category";
import { renderProduct } from "../app/product";
import { categories, products } from "./data";


export const initialRender = () => {
    renderCategory(categories);
    renderProduct(products);
};