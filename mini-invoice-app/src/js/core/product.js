import { productGroup, productTemplate } from "./selector.js";
import { products } from "./variables.js";

export const productCreate = ({name, price}) => {
    // const option = document.createElement("option");
    // option.innerText = product.name;
    // option.value = product.id;
    // return option;

    const card = productTemplate.content.cloneNode(true);
    card.querySelector(".product-name").innerText = name;
    card.querySelector(".product-price").innerText = price;
    return card;
};

export const productRender = (products) => {
    //console.log(products);
    // products.forEach((el) => productSelect.append(productCreate(el)))
    products.forEach(({name, price, id}) => {
        productSelect.append(new Option(name, id));
        productGroup.append(productCreate({name, price}));
    });
}