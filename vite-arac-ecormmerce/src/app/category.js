import { categories, products } from "../js/data"
import { categoryGroup, categoryTemplate, productGroup } from "../js/selectors";
import { renderProduct } from "./product.js";

export const createCategory = (categoryName) => {
    const template = categoryTemplate.content.cloneNode(true);
    template.querySelector("#cartBtn").innerText = categoryName;
    return template;
};

export const renderCategory = (categories) => {
    categories.forEach(category => categoryGroup.append(createCategory(category)));
}


export const handleCategoryGroup = (event) => {
    // console.log(event.target.innerText);
    if (event.target.classList.contains("cat-btn")) {
        const currentCategory = event.target.innerText;
        renderProduct(products.filter((el) => el.category === currentCategory || currentCategory === "All"));

    }
}
