import { createFormHandler, manageInventoryBtnHandler, newProductCreateFormHandler, printBtnHandler, recordGroupHandler } from "./handlers.js"
import { createForm, manageInventoryBtn, newProductCreateForm, printBtn, recordGroup, sheetCloseBtn } from "./selector.js"


export const listener = () => {
    createForm.addEventListener("submit", createFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
    manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
    sheetCloseBtn.addEventListener("click", manageInventoryBtnHandler);
    newProductCreateForm.addEventListener("submit", newProductCreateFormHandler);
    printBtn.addEventListener("click", printBtnHandler);
}