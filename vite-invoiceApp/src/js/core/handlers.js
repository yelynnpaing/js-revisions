import { productRender } from "./product.js";
import { addRecordQuantity, createRecord, deleteRecord, subRecordQuantity, updateRecord, updateRecordTotal } from "./record.js";
import { createForm, inventorySheet, newProductCreateForm, recordGroup, totalCost } from "./selector.js";
import { products } from "./variables.js";


export const createFormHandler = (e) => {
    e.preventDefault();
    //console.log("u submit...");

    //get data from from
    const formData = new FormData(createForm);
    const currentProductId = parseInt((formData.get("productSelect")));
    const currentProduct = products.find((el) => el.id === currentProductId);
    const currentQuantity = parseInt(formData.get("inputQuantity"));

    //check existed
    const isRowExisted = recordGroup.querySelector(`[row-product-id='${currentProductId}']`);
    if(isRowExisted){
        // const currentQuantityElement = isRowExisted.querySelector(".row-quantity");
        // const currentPrice = isRowExisted.querySelector(".row-product-price");
        // const currentCost = isRowExisted.querySelector(".row-cost");
        // currentQuantityElement.innerText = parseInt(currentQuantityElement.innerText) + currentQuantity;
        // currentCost.innerText = currentQuantityElement.innerText * parseFloat(currentPrice.innerText);

        updateRecord(isRowExisted.getAttribute("row-product-id"), currentQuantity);
    }else{
        //append data to table
        recordGroup.append(createRecord(currentProduct, currentQuantity));
    }    
    createForm.reset();
    // updateRecordTotal();
};

export const recordGroupHandler = (event) => {
    if(event.target.classList.contains("row-del-btn")){
       deleteRecord(event);
    }else if(event.target.classList.contains("row-q-add")){
        // addRecordQuantity(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"), 1);
    }else if(event.target.classList.contains("row-q-sub")){
        // subRecordQuantity(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"), -1);
    }
};

export const manageInventoryBtnHandler = ()  => {
    inventorySheet.classList.toggle("-translate-x-full");
};

export const newProductCreateFormHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(newProductCreateForm);
    const createProduct = {
        id: Date.now(),
        name: formData.get("new_product_name"),
        price: formData.get("new_product_price"),
    }
    newProductCreateForm.reset();
    products.push(createProduct);
    productRender(products);
}

export const printBtnHandler = () => {
    window.print();
}