import { createFormHandler, manageInventoryBtnHandler, recordGroupHandler } from "./handlers.js"
import { createForm, manageInventoryBtn, recordGroup, sheetCloseBtn } from "./selector.js"


export const listener = () => {
    createForm.addEventListener("submit", createFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
    manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
    sheetCloseBtn.addEventListener("click", manageInventoryBtnHandler);
}