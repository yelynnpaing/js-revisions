import { products } from "../js/data"
import { productGroup, productTemplate } from "../js/selectors"

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true);
    template.querySelector(".product-image").src = product.image;
    template.querySelector(".product-title").innerText = product.title;
    template.querySelector(".product-desc").innerText = product.description;
    template.querySelector(".product-rate-and-score").innerText = `( ${product.rating.rate} ) / ( ${product.rating.count} )`;
    template.querySelector(".product-price").innerText = product.price;
    return template;
}

export const renderProduct = (products) => {
    products.forEach(product => productGroup.append(createProduct(product)));
}