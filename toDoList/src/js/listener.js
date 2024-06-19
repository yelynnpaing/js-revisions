import { handleInputForm, handleListItemGroup } from "./handlers";
import { listItemGroup } from "./selectors";


const listener = (event) => {
    inputForm.addEventListener("submit", handleInputForm);
    listItemGroup.addEventListener("click", handleListItemGroup)
}

export default listener;