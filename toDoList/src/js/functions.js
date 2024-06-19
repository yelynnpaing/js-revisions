import { listItemTemplate } from "./selectors";

export const listItemCreate = () => {
    const inputText = document.querySelector("#input");
    const template = listItemTemplate.content.cloneNode(true);
    const listItemText = template.querySelector("#listItemText");
    listItemText.innerText = inputText.value;
    
    return template;
}
