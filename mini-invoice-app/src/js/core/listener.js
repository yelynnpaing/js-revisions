import { createFormHandler, recordGroupHandler } from "./handlers.js"
import { createForm, recordGroup } from "./selector.js"


export const listener = () => {
    createForm.addEventListener("submit", createFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
}