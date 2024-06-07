import { products } from "./variables.js";

export const productCreate = (product) => {
    const option = document.createElement("option");
    option.innerText = product.name;
    option.value = product.id;

    return option;
};

export const productRender = (products) => {
    //console.log(products);
    // products.forEach((el) => productSelect.append(productCreate(el)))
    products.forEach(({name, id}) => {
        productSelect.append(new Option(name, id));
    });
}