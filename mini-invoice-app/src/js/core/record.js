import { rowTemplate, totalCost } from "./selector.js"

export const createRecord = (product, quantity) => {
    const record = rowTemplate.content.cloneNode(true);
    // console.log(record);
    const rowCost = product.price * quantity;
    // record.querySelector(".row-no").innerText = 1;
    record.querySelector(".row-product-name").innerText = product.name;
    record.querySelector(".row-product-price").innerText = product.price;
    record.querySelector(".row-quantity").innerText = quantity;
    record.querySelector(".row-cost").innerText = rowCost;    
    
    //console.log(record.querySelector(".row-cost"))
    return record;
}

    //add total cost
export const updateRecordTotal = () => {
    const allRowCost = document.querySelectorAll(".row-cost");
    let total=0;
    allRowCost.forEach((el) => total += parseFloat(el.innerText));
    totalCost.innerText = total;
}