import { rowTemplate, totalCost } from "./selector.js"

export const createRecord = ({id, name, price}, quantity) => {
    const record = rowTemplate.content.cloneNode(true);
    const rowCost = price * quantity;
    // record.querySelector(".row-no").innerText = 1;
    record.querySelector(".row").setAttribute("row-product-id", id);
    record.querySelector(".row-product-name").innerText = name;
    record.querySelector(".row-product-price").innerText = price;
    record.querySelector(".row-quantity").innerText = quantity;
    record.querySelector(".row-cost").innerText = rowCost;    

    return record;
}

    //add total cost
export const updateRecordTotal = () => {
    const allRowCost = document.querySelectorAll(".row-cost");
    // let total=0;
    // allRowCost.forEach((el) => total += parseFloat(el.innerText));
    
    //0 is initial value for reduce
    totalCost.innerText = [...allRowCost].reduce((pv, {innerText}) => pv+ parseFloat(innerText), 0); 
}

export const deleteRecord = (event) => {
    const row = event.target.closest(".row");
    if(confirm("Are you sure want to delete this row")){
        row.remove();
        updateRecordTotal();
    }
};

export const addRecordQuantity = (event) => {
    const row = event.target.closest(".row");
    const currentQuantity = row.querySelector(".row-quantity");
    const currentPrice = row.querySelector(".row-product-price");
    const currentCost = row.querySelector(".row-cost");
    currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
    currentCost.innerText = currentQuantity.innerText * parseFloat(currentPrice.innerText);
    updateRecordTotal();
}

export const subRecordQuantity = (event) => {
    const row = event.target.closest(".row");
    const currentQuantity = row.querySelector(".row-quantity");
    const currentPrice = row.querySelector(".row-product-price");
    const currentCost = row.querySelector(".row-cost");
    if(currentQuantity.innerText > 1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText = currentQuantity.innerText * parseFloat(currentPrice.innerText);
        updateRecordTotal();
    }else{
        deleteRecord(event);
    }
    
}