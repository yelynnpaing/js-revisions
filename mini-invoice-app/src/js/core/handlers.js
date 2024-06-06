import { createRecord, updateRecordTotal } from "./record.js";
import { createForm, recordGroup, totalCost } from "./selector.js";
import { products } from "./variables.js";


export const createFormHandler = (e) => {
    e.preventDefault();
    //console.log("u submit...");

    //get data from from
    const formData = new FormData(createForm);
    const currentProductId = parseInt((formData.get("productSelect")));
    const currentProduct = products.find((el) => el.id === currentProductId);
    const currentQuantity = parseInt(formData.get("inputQuantity"));

    // console.log(currentProduct, currentQuantity);
    //append data to table
    recordGroup.append(createRecord(currentProduct, currentQuantity));
    createForm.reset();

    updateRecordTotal();
}