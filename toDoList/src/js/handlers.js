
import { listItemCreate } from "./functions";
import { listItem, listItemGroup } from "./selectors";

export const handleInputForm = (event) => {
    event.preventDefault();
    listItemGroup.append(listItemCreate());
    inputForm.reset();
};

export const handleListItemGroup = (event) => {
    if (event.target.classList.contains("list-item-check")) {
        const currentListItem = event.target.closest(".item-list");
        const currentListItemText = currentListItem.querySelector(".list-item-text");
        const currentListItemEditBtn = currentListItem.querySelector(".list-item-edit-btn");
        const currentListItemDelBtn = currentListItem.querySelector(".list-item-del-btn");
        currentListItemText.classList.toggle("line-through");
        currentListItemEditBtn.classList.toggle("opacity-30");
        currentListItemEditBtn.classList.toggle("pointer-events-none");
        currentListItemDelBtn.classList.toggle("opacity-30");
        currentListItemDelBtn.classList.toggle("pointer-events-none");
    }

    if (event.target.classList.contains("list-item-edit-btn")) {
        const currentListItem = event.target.closest(".item-list");
        const currentListItemText = currentListItem.querySelector(".list-item-text");
        currentListItemText.innerText = window.prompt(
          "Changing to do list item name",
          `${currentListItemText.innerText}`
        );
    }

    if (event.target.classList.contains("list-item-del-btn")) {
        const currentListItem = event.target.closest(".item-list");
        
        if (window.confirm("Are you sure to delete ? ")) {
             currentListItem.remove();
        }
    }

    
}

