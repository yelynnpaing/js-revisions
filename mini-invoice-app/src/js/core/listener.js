import { createFormHandler } from "./handlers.js"
import { createForm } from "./selector.js"


export const listener = () => {
    createForm.addEventListener("submit", createFormHandler);
}