import { categories } from "../js/data.js"
import { categoryGroup, categoryTemplate } from "../js/selectors.js";

export const createCategory = (categoryName) => {
    const template = categoryTemplate.content.cloneNode(true);
    template.querySelector("#cartBtn").innerText = categoryName;
    return template;
};

export const renderCategory = (categories) => {
    categories.forEach(category => categoryGroup.append(createCategory(category)));
}

